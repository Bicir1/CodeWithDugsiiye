import { useState } from "react";

const ToggleButton  = () => {
    const [isOn , setIsOn] = useState(true)
    const trunLigth = () => {
        setIsOn(!isOn);
    }

    return (
        <div>
            <p>the button is {isOn ? "ON" : "OFF"}</p>


            <button onClick={trunLigth}>Turn {isOn ? "OFF" : "ON"} </button>
        </div>
    );
};

export default ToggleButton ;