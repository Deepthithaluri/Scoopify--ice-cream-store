const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const cors = require("cors");
const app = express();  
app.use(cors());

dotenv.config();
connectDB();

app.use(express.json()); 

app.use("/api/auth", authRoutes); 
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Scoopify Backend Running");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});