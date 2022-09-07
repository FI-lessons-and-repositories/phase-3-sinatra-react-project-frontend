import React from 'react'
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, works, setWorks}) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setWorks([...works, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    };

    return (
    <form onSubmit={onFormSubmit}>
        <input
           type="text"
           placeholder="Enter Work to be assigned..."
           className="work-input"
           value={input} required
           onChange={onInputChange}
        />
        <button className="button-add" type="submit">Add</button>
    </form>
  )
}

export default Form
