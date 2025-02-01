// backend.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { findUsers, findUserByID, addUser, deleteUser } from './user-services.js';

const app = express();
const port = 8000;


mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB "))
.catch((err) => console.error("Error connecting to MongoDB:", err));


//allows backend to respond to requests from frontend
app.use(cors());
//needs to be at top
app.use(express.json());

//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await findUsers(req.query.name, req.query.job);
    res.status(200).send({users_list: users});  // send 200 status code for successful user fetch
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

// get user by id
app.get("/users/:id", async (req, res) => {
  try {
    const user = await findUserByID(req.params.id);
    if (!users) {
      res.status(404).send("User not found.");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Error fetching user. Try again.");
  }
});

// add a new user
app.post("/users", async (req, res) => {
  try {
    const savedUser = await addUser(req.body);
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send("Error adding user. Try again.");
  }
});

// delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await deleteUser(req.params.id);
    if (!deletedUser) {
      res.status(404).send("User not found.");
    }
    res.status(204).send();
  } catch (error) {
    console.error("Delete Error:", error); // 🔍 Log the actual error
    res.status(500).send({ error: "Error deleting user. Try again.", message: error.message });  }
});

//send 'hello world' to the root URL
app.get("/", (req, res) => {
	res.send("Hello World! The Backend is running. Try adding, deleting, or getting users."); });

app.listen(port, () => {
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});
