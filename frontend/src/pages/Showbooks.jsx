import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const Showbooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore2-one.vercel.app/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
        <Backbutton />
        <h1 className="text-3xl my-4 font-bold">Task Details</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">ID: </span>
              <span className="text-lg">{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">
                Title:{" "}
              </span>
              <span className="text-lg">{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">
                Author:{" "}
              </span>
              <span className="text-lg">{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">
                Publish Year:{" "}
              </span>
              <span className="text-lg">{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">
                Create Time:{" "}
              </span>
              <span className="text-lg">
                {new Date(book.createdAt).toString()}
              </span>
            </div>
            <div className="my-4">
              <span className="text-lg font-semibold text-gray-600">
                Update Time:{" "}
              </span>
              <span className="text-lg">
                {new Date(book.updatedAt).toString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showbooks;
