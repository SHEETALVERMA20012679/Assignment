import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const Editbook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore2-one.vercel.app/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error occurred, check console", {
          variant: "error",
        });
        console.error(err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`https://bookstore2-one.vercel.app/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("An error occurred", { variant: "error" });
        console.error(err);
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images2.minutemediacdn.com/image/upload/c_crop,w_2667,h_1500,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g68nakw1w6dzaa32qj.jpg)",
      }}
    >
      <div className="p-4 bg-opacity-90">
        <Backbutton />
        <h1 className="text-3xl text-white my-4">Edit Book</h1>
        {loading && <Spinner />}
        <div className="flex flex-col border-2 bg-white border-sky-400 rounded-xl p-4 mx-auto sm:w-full sm:max-w-sm">
          <div className="my-4">
            <label className="text-4xl mr-4 text-gray-500">Task</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-4xl mr-4 text-gray-500">Description</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-4xl mr-4 text-gray-500">Due Date</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button
            className="rounded-md bg-blue-800 hover:bg-red-500 w-full h-10 text-white hover:text-black"
            onClick={handleEditBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editbook;
