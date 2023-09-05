import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

// CORS policy
// Cross Origin Resource Sharing
const app = express();


//Middleware for parsing request body
app.use(express.json());

// Middleware for CORS
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option 2: Allow custom origins
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"]
})
);



app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome to MERN tutorial");
});

app.use("/books", booksRoute);




  
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB is connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });