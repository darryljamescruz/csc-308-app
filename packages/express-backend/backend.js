// backend.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { findUsers, findUserByID, addUser, deleteUser } from './user-services.js';

const app = express();
const port = 8000;


mong


//allows backend to respond to requests from frontend
app.use(cors());
//needs to be at top
app.use(express.json());

//post method to add a user
app.post("/users", (req, res) => {
  const userToAdd = req.body;
  const addedUser = addUser(userToAdd);	
  res.status(201).send(addedUser);	// send 201 status code for successful user addition
});

//delete user by ID
app.delete('/users/:id' , (req, res) => {
  const userIdToDelete = req.params.id;
  const deletedUser = deleteUser(userIdToDelete);
  if (deletedUser) {
    res.status(204).send(); // send 204 status code for successful deletion
  } else {
    res.status(404).send("Resource not found."); // send 404 status code if user not found
  }
});

//send 'hello world' to the root URL
app.get("/", (req, res) => {
	res.send("Hello World!"); });

//get all users
app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  let result = findUserByNameAndJob(name, job);
  result = { users_list: result };
  res.send(result);
});

//get user by id  
app.get("/users/:id", (req,res) => {
    const id = req.params["id"];    
    let result = findUserByID(id);
    console.log(result);
    if (result === undefined) {
        res.status(404).send("Resource not found.");
    } else {
        res.send(result);
    }
});

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
