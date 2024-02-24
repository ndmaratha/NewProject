const express = require("express");
const cors = require("cors");
const cartRoutes = require("./Routes/cartRoutes");
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoute");
const connectDB = require("./dbConfig/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/", cartRoutes);
app.use("/", productRoutes);
app.use("/", userRoutes);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
