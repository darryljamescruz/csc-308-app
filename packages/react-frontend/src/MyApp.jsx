//React first app - Part II 

import React, {useState} from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
    const [characters, setCharacters] = useState([]);

    function removeOneCharacter(index) {
        const updated = characters.filter((character, i) => {
            return i !== index;
        });
        setCharacters(updated);
    }

    function updateList(person) {
        setCharacters([...characters, person]);   
    }

    return (
        <div className="container">
            <Table 
            characterData={characters}
            removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );
}

// makes the component available to be imported into other components or files
export default MyApp