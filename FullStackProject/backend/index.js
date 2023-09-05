import express, { request, response } from "express";
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


// Route for GetAll Books from db

app.get("/books", async (request,response)=>{
    try{
        const books = await Book.find({}); // find all books

        return response.status(200).json({
            // creates a json object with the following properties
            // count: number of books
            // data: books
            count: books.length,
            data: books
        });
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message:error.message });
    }
});

// Route for get one book from db by id 
app.get("/books/:id", async (request,response)=>{
    try{
        const { id } = request.params;
        const book = await Book.findById(id); // find one book by id

        // return the book to the client
        return response.status(200).json(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message:error.message });
    }
});


// Route for update a book
app.put("/books/:id",async (request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "Required field is missing",
        });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({meessage: "Book not found"});
        }
        return response.status(200).send({message: "Book updated successfully"});
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({ message:error.message });
    }
});

// Route for delete a book
app.delete("/books/:id", async (request,response)=>{
    try{
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: "Book not found"});
        }
        return response.status(200).send({message: "Book deleted successfully"});

    }catch(error){
        console.log(error.message);
        response.status(500).send({ message:error.message });
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