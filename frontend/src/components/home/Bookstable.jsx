import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Bookstable({ books }) {
  return (
    <div className="overflow-hidden bg-cover bg-center">
      <div className="container mx-auto p-8 flex justify-center">
        {" "}
        {/* Use flex to center horizontally */}
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300">No</th>
              <th className="p-3 border border-gray-300">Task</th>
              <th className="p-3 border border-gray-300 hidden md:table-cell">
                Description
              </th>
              <th className="p-3 border border-gray-300 hidden md:table-cell">
                Due Date
              </th>
              <th className="p-3 border border-gray-300">Operation</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="bg-white">
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">{book.title}</td>
                <td className="p-3 border border-gray-300 hidden md:table-cell">
                  {book.author}
                </td>
                <td className="p-3 border border-gray-300 hidden md:table-cell">
                  {book.publishYear}
                </td>
                <td className="p-3 border border-gray-300">
                  <div className="flex justify-center space-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-green-800 text-2xl" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-yellow-600 text-2xl" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-600 text-2xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookstable;
