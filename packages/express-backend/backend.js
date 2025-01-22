// backend.js



import express from 'express';
import cors from 'cors';
const app = express();
const port = 8000;

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspiring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      },
			{
        id: "lol123",
        name: "Daniel",
        job: "Bartender"
      },
			{
        id: "lol321",
        name: "Daniel",
        job: "Bartender"
      },
      {
        "id": "qwe123",
        "name": "Cindy",
        "job": "Zookeper"
      }
    ]
};

//find user by id
const findUserByID = (id) => users["users_list"].find((user) => user["id"] === id);

//find user by name and job
const findUserByNameAndJob = (name, job) => {
  return users["users_list"].filter(
    (user) => {
      if (name && job) {
        return user["name"] === name && user["job"] === job;
      } else if (name) {
        return user["name"] === name;
      } else if (job) {
        return user["job"] === job;
      }
      return true;
    }
  );
};

// id generator function
const generateID = () => {
	return Math.random().toString(36).substr(2, 9);
}

//add a user
const addUser = (user) => {
  user.id = generateID();	// generate a random id before adding a user
  users["users_list"].push(user);
  console.log
  return user;
}

//delete a user by their ID
const deleteUser = (id) => {
  const index = users["users_list"].findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users["users_list"].splice(index, 1)[0];
    console.log("User deleted");
    return deletedUser;
  }
  return null;
}

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
