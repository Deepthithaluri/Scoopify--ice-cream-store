import { Link } from "react-router-dom";

const isLoggedIn = localStorage.getItem("isLoggedIn");

function Navbar({ cart, isLoggedIn, setIsLoggedIn }) {
return (
<div className="bg-pink-200 text-pink-600 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
<h1 className="text-xl font-bold">Scoopify 🍦</h1>

<div className="space-x-6">
<Link
to="/"
className="relative hover:underline hover:underline-offset-4 transition duration-200"
>
 Home
</Link>

<Link
to="/cart"
className="relative hover:underline hover:underline-offset-4 transition duration-200"
>
 Cart ({cart.length})
</Link>

<Link
to="/orders"
className="relative hover:underline hover:underline-offset-4 transition duration-200"
>
 Recent Orders
</Link>

{!isLoggedIn && (
<Link
to="/login"
className="relative hover:underline hover:underline-offset-4 transition duration-200"
>
 Login
</Link>
 )}

{!isLoggedIn && (
<Link
to="/register"
className="relative hover:underline hover:underline-offset-4 transition duration-200"
>
 Register
</Link>
 )}

{isLoggedIn && (
<button
onClick={() => {
localStorage.removeItem("isLoggedIn");
setIsLoggedIn(false);
window.location.href = "/";
 }}
className="bg-red-500 text-white px-2 py-1 rounded"
>
 Logout
</button>
 )}
</div>
</div>
 );
}

export default Navbar;