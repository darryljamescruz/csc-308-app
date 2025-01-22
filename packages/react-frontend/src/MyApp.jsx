//React first app - Part II 

import React, {useState, useEffect} from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((res) => res.json())
            .then((json) => setCharacters(json["users_list"]))
            .catch((error) => {console.log(error); });
    }, []);

    function removeOneCharacter(index) {
        const characterToRemove = characters[index];
        deleteUser(characterToRemove.id)
            .then((response) => {
                if (response.status === 204) {
                    const updated = characters.filter((character, i) => {
                        return i !== index;
                    });
                    setCharacters(updated);
                } else {
                    console.log("Failed to delete user");
                }
            })
            .catch((error) => { 
                console.log(error);
            });
    }

    function fetchUsers() {
        const promise = fetch("http://localhost:8000/users");
        return promise;
    }

    function postUser(person) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(person),
        });
        return promise;
    }

    function deleteUser(id) {
        const promise = fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE",
        });
        return promise;
    }

    // updateList function redefined to include posting logic
    function updateList(person) {
        postUser(person)
            .then((response) => {
                if (response.status === 201) {
                    return response.json();
                } else {
                    console.log("Failed to add user");
                    throw new Error("Failed to add user");
                }
            })
            .then((newUser) => {
                setCharacters([...characters, newUser]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <Table 
            characterData={characters}
            removeCharacter={removeOneCharacter}/>
            <Form handleSubmit={updateList} />
        </div>
    );
}

// makes the component available to be imported into other components or files
export default MyApp