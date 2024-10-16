import React from 'react';

const StudentRegistrationForm = ({ handleForm, handleSubmit }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-blue-200">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 my-8">
          <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
            Student Registration
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-md"
                placeholder="Enter your full name"
                onChange={handleForm}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-md"
                placeholder="Enter your email address"
                onChange={handleForm}
              />
            </div>

            {/* Course Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Course
              </label>
              <input
                type="text"
                name="course"
                className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-md"
                placeholder="Course Name"
                onChange={handleForm}
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Additional Information
              </label>
              <textarea
                name="message"
                className="mt-2 w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-md"
                rows="4"
                placeholder="Any additional information"
                onChange={handleForm}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default StudentRegistrationForm;
