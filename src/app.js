import express from "express";
import mongoose from "mongoose";
import colors from "colors";

// Import products routes
import productsRouter from "./routes/productsRoutes.js";

// DB connection
try {
   mongoose.connect("mongodb://127.0.0.1:27017/apiTwitch",
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }
   )
      .then(() => { console.log(colors.bgCyan("DB connection succesfull!")); });
} catch (error) {
   console.log(error);
}


// App instance
const app = express();

// Route middleware
app.use("/api/v1/products", productsRouter)

// App server listening
app.listen(3000, () => console.log(colors.rainbow("Server running in 3000 port")));