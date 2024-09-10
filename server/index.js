require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const productsRouter = require("./routes/Products");
const categoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");
const authRouter = require("./routes/Auth");
const usersRouter = require("./routes/User");
const cartRouter = require("./routes/Cart");
const PORT = process.env.PORT || 7171;

//middlewares for cors
app.use(
  cors({
    origin: ["http://localhost:5173", "https://e-bazaar-front.vercel.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/products", productsRouter.router);
app.use("/categories", categoriesRouter.router);
app.use("/brands", brandsRouter.router);
app.use("/users", usersRouter.router);
app.use("/auth", authRouter.router);
app.use("/cart", cartRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_STR_ATLAS);
  console.log("DB connected");
}

app.get("/", (req, res) => {
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
