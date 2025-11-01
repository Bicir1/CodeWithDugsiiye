import { useState } from "react";


const ToggleButton  = () => {
    const [IsOn, setIsOn] = useState(true);
    const toggle  = () => {
        setIsOn(!IsOn)
    }
    return (
        <div>
            <p>the button is {IsOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Turn {IsOn ? "OFF" : "ON"}</button>
        </div>
    );
};

export default ToggleButton;