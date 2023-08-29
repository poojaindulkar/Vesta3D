import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <div class="text-center">
          <h1 class="text-2xl font-bold mb-4">Create Account</h1>
          <p class="text-gray-500">
            Already have an account?{" "}
            <Link to="/login" class="text-green-500">
              Sign in
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} class="mt-6 space-y-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
            class="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
            class="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            class="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            class="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {error && <div class="text-red-500">{error}</div>}
          <button
            type="submit"
            class="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
