import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";


const app = express();


//Middleware for parsing request body
app.use(express.json());

app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome to MERN tutorial");
});


app.post("/books",async (request,response)=>{
    // try catch block to handle errors
    // try block will check if 
    try{   
        if(
            // check if request body is empty
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "Required field is missing",
        });
     }

     const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
     };
     const book = await Book.create(newBook);

     return response.status(201).send(book);

    } catch(error){
        // receive error from mongoose
        console.log(error.message);
        // send error to client
        response.status(500).send({message:error.message});
    }
});
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