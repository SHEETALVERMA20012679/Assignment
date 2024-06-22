import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import Bookscard from "../components/home/Bookscard";
import Bookstable from "../components/home/Bookstable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore2-one.vercel.app/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="p-4 flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/books-library-generative-ai_220873-19768.jpg?w=1060')",
      }}
    >
      <div className="flex justify-center items-center gap-x-4">
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${
            showType === "table" ? "bg-sky-600" : ""
          }`}
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className={`bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg ${
            showType === "card" ? "bg-sky-600" : ""
          }`}
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl my-8 text-white">Task-List</h1>
        <Link to="/books/create">
          <h1 className="text-white mr-4 text-2xl">
            Add Task <MdOutlineAddBox className="text-white text-4xl" />
          </h1>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <Bookstable books={books} />
      ) : (
        <Bookscard books={books} />
      )}
    </div>
  );
};

export default Home;
