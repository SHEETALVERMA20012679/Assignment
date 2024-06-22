import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Createbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post("http://localhost:4000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.error(err);
      });
  };

  return (
    <div
      className="p-4 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2488.jpg?t=st=1708797488~exp=1708801088~hmac=f6c19a802b8d60f8eba7bac43f6525f46e8b448596577069ce34b95e8eca2ff3&w=1060')`,
      }}
    >
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <Backbutton />
        <h1 className="text-3xl text-white my-4">Create Task</h1>
        {loading && <Spinner />}
        <div className="flex flex-col">
          <div className="my-4">
            <label className="text-2xl mr-4 text-gray-500">Task</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 text-gray-500">Description</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 text-gray-500">Due Date</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button
            className="rounded-md bg-blue-800 hover:bg-red-500 w-full h-10 text-white hover:text-black"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createbook;
