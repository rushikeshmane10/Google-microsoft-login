import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
const GoogleLoginButton = () => {
  const google = () => {
    window.open(`http://localhost:5000/v1/auth/google`, "_self");
  };
  const microsoft = () => {
    window.open(`http://localhost:5000/v1/auth/microsoft`, "_self");
  };
  return (
    <>
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Sign in to your account
        </p>

        {/* Dummy Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Dummy Sign In Button */}
        <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/20"></div>
          <span className="px-3 text-gray-300 text-sm">or continue with</span>
          <div className="flex-grow h-px bg-white/20"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={microsoft}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition w-full"
          >
            <FaMicrosoft className="text-black" />
            <span className="text-gray-700 font-medium">Microsoft</span>
          </button>
          <button
            onClick={google}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl shadow hover:bg-gray-100 transition w-full"
          >
            <FaGoogle className="text-black" />
            <span className="text-gray-700 font-medium">Google</span>
          </button>
        </div>

        {/* Dummy Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-indigo-400 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
    </>
  );
};

export default GoogleLoginButton;
