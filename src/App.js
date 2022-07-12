import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import SpreadOperator from './SpreadOperator/SpreadOperator';
import './App.css';
import { useState } from 'react';

const listArray = [];
const stringData = "This is string data from parent to reneder to child element";


function App() {

const [userInput, ChangeUserInput] = useState('');
const SubmitTransfer = (value) => {
  ChangeUserInput(value);
  listArray.push(value);
}


  return (
    <div className="App">
        <Form onStringTransfer = {stringData} onSubmitTransfer = {SubmitTransfer}/>
        <p>{userInput}</p>
        {listArray.map((item, index) => <p key = {index}>{(index + 1) + ': ' + item}</p>)}
        <ThreeButtons/>
        <SpreadOperator/>
    </div>
  );
}

export default App;
