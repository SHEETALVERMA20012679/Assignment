import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel";
import { CiUser } from "react-icons/ci";
function BookSingleCard({ book }) {
  const [showmodel, setShowModel] = useState(false);

  return (
    <div
      key={book._id}
      className="bg-white relative border-2 border-gray-500 rounded-lg px-4 py-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <div className="absolute top-2 right-2 bg-gray-200 px-2 py-1 rounded-lg">
        <p className="text-xs text-gray-600">{book.publishYear}</p>
      </div>
      <img
        src="https://images.pexels.com/photos/1172018/pexels-photo-1172018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h4 className="text-gray-600 font-semibold hidden">{book._id}</h4>
      <div className="flex items-center gap-x-2 mb-2">
        <FaPencilAlt className="text-red-300 text-2xl" />
        <h2 className="text-xl font-semibold">{book.title}</h2>
      </div>
      <div className="flex items-center gap-x-2 mb-4">
        <CiUser className="text-red-300 text-2xl" />
        <h2 className="text-lg">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <FaEye
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showmodel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
}

export default BookSingleCard;
