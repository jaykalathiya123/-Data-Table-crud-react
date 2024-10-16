


import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewData = ({ handleEdit , setStorage , Storage }) => {
  
  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };
return (
  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-xl">
    <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-blue-600 text-white uppercase text-sm font-semibold">
          <th className="px-4 py-2 border border-blue-500">#</th>
          <th className="px-4 py-2 border border-blue-500">Name</th>
          <th className="px-4 py-2 border border-blue-500">Email</th>
          <th className="px-4 py-2 border border-blue-500">Course</th>
          <th className="px-4 py-2 border border-blue-500">Message</th>
          <th className="px-4 py-2 border border-blue-500">Action</th>
        </tr>
      </thead>
      <tbody>
        {Storage.map((rec, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-blue-50"
            } hover:bg-blue-100 text-gray-700 text-sm transition-colors duration-200`}
          >
            <td className="border px-4 py-2 text-center font-medium">
              {index + 1}
            </td>
            <td className="border px-4 py-2 text-center">{rec.name}</td>
            <td className="border px-4 py-2 text-center">{rec.email}</td>
            <td className="border px-4 py-2 text-center">{rec.course}</td>
            <td className="border px-4 py-2 text-center">{rec.message}</td>
            <td className="border px-4 py-2 text-center">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition duration-300"
                onClick={() => handleEdit(rec.id)}
              >
                <PencilIcon className="w-5 h-5 inline-block" />
              </button>

              <button
                className="bg-red-500 text-white px-2 mx-2 py-1 rounded-full hover:bg-red-600 transition duration-300"
                onClick={() => handleRemove(rec.id)}
              >
                <TrashIcon className="w-5 h-5 inline-block" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

export default ViewData;

