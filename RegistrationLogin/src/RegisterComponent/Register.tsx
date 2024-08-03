import axios from "axios";
import React, { useState } from "react";

interface FormState {
  name: string;
  city: string;
  email: string;
  password: string;
}

interface FormErrors {
  name: string;
  city: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [formState, setFormState] = useState<FormState>({
    name: "",
    city: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    city: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      name: "",
      city: "",
      email: "",
      password: "",
    };

    if (formState.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (formState.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:9090/register",
          formState
        );
        console.log(response.data);
        setMsg("Registered Successfully");

        setFormState({
          name: "",
          city: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Registration Form</h1>
        {msg && <p className="text-center text-green-600 mb-4">{msg}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-lg font-semibold text-gray-700 mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formState.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your City"
            />
            {errors.city && <p className="text-red-500 mt-1">{errors.city}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
