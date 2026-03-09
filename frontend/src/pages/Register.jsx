import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register",{
        name,
        email,
        password
      });

      alert("Registration successful");
      navigate("/login");

    } catch(err){
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleRegister}
        className="border p-6 rounded shadow w-80 bg-white"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="bg-pink-500 text-white w-full p-2 rounded hover:bg-pink-600">
 Register
</button>

      </form>

    </div>
  );
}

export default Register;