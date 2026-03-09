import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";

function Login({ setIsLoggedIn }) {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

try {

await axios.post("/api/auth/login", {
email,
password
});

localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("userEmail", email);

setIsLoggedIn(true);

navigate("/");

} catch (err) {
alert("Invalid credentials");
}
};

return (
<div className="flex justify-center items-center h-screen">
<form onSubmit={handleLogin} className="border p-6 rounded shadow w-80 bg-white">
<h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
onChange={(e) => setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-3"
onChange={(e) => setPassword(e.target.value)}
/>

<button className="bg-pink-500 text-white w-full p-2 rounded hover:bg-pink-600">
Login
</button>

</form>
</div>
);
}

export default Login;