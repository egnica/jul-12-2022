import { useState } from "react";


const Form = (props) => {


   const [userInput, ChangeUserInput] = useState('');
   const userInputHandler = (event) => {
    ChangeUserInput(event.target.value);
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        props.onSubmitTransfer(userInput);
        ChangeUserInput('');
    }


    return (
    <form onSubmit = {SubmitHandler}>
        <p>{props.onStringTransfer}</p>
        <label>Enter Data: </label>
        <input onChange = {userInputHandler} value = {userInput}/>
        <button>Submit</button>

    </form>
);
}
export default Form;