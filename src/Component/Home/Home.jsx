import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
    <div className="py-5">
      <Link
        className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-2xl focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
        to="/student"
      >
        AddRec
      </Link>
    </div>
  </div>
);

}

export default Home
