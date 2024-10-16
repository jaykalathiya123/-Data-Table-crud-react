import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        setUpdataData(editData);
    }, []);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
    <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8 my-5 border-t-8 border-indigo-500">
      <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">
        Registration Update
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={updataData.name}
            className="mt-1 w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Full Name"
            onChange={handleForm}
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={updataData.email}
            className="mt-1 w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Email Address"
            onChange={handleForm}
          />
        </div>

        {/* Course Field */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Course
          </label>
          <input
            type="text"
            name="course"
            value={updataData.course}
            className="mt-1 w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Course Name"
            onChange={handleForm}
          />
        </div>

        {/* Additional Information Field */}
        <div>
          <label className="block text-sm font-medium text-indigo-700">
            Additional Information
          </label>
          <textarea
            name="message"
            value={updataData.message}
            className="mt-1 w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            placeholder="Additional Information"
            onChange={handleForm}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 transition-all duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
);

};

export default Update;
