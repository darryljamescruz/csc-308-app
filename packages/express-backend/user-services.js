// service layer
import User from "./user.js";   // import mongoose model
import mongoose from "mongoose";

// fetch all users by name and job, if only one is provided, filter by that  
export const findUsers = async (name, job) => {
    let query = {};
    if (name && job) {
        query = {name, job};
    } else if (name) {
        query = {name};
    } else if (job) {
        query = {job};
    }
    return User.find(query);
}

// fetch a single user by id
export const findUserByID = async (id) => { // async function preserves the promise returned originally
    return User.findById(id);   // find user by _id
};

// add a new user to the database
export const addUser = async (userData) => {
    const user = new User(userData);
    return user.save();
}

// delete a user from the database  
export const deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
}