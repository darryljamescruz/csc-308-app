// backend.js

//TODO: Second, implement an additional action to get all users that match a given name and a given job. Hint: look at what we did in step 4 and extend it.


import express from 'express';
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
        "id": "qwe123",
        "name": "Cindy",
        "job": "Zookeper"
      }
    ]
};

//find user by id
const findUserByID = (id) => users["users_list"].find((user) => user["id"] === id);

//find user by name
const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };
  
//add a user
const addUser = (user) => {
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

//needs to be at top
app.use(express.json());

//post method to add a user
app.post("/users", (req, res) => {
  const userToAdd = req.body;
  addUser(userToAdd);
  res.send();
});

//delete user by ID
app.delete('/users/:id' , (req, res) => {
  const userIdToDelete = req.params.id;
  deleteUser(userIdToDelete);
  res.send();
});

//send 'hello world' to the root URL
app.get("/", (req, res) => {
	res.send("Hello World!"); });

//get all users
app.get("/users", (req, res) => {
    const name = req.query.name;
    if (name != undefined) {
      let result = findUserByName(name);
      result = { users_list: result };
      res.send(result);
    } else {
      res.send(users);
    }
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
