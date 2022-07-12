import { useState } from "react";

const buttonArray = ['You selected button one', 'You selected button two', 'You selected button three'];
const ThreeButtons = () => {

    const [buttonInput, ChangeButtonInput] = useState('Please Select a Button')

    return(
        <div>
            <p>{buttonInput}</p>
            <button onClick = {() => ChangeButtonInput(buttonArray[0])}>Button 1</button>
            <button onClick = {() => ChangeButtonInput(buttonArray[1])}>Button 2</button>
            <button onClick = {() => ChangeButtonInput(buttonArray[2])}>Button 3</button>
        </div>
    );
}
export default ThreeButtons;