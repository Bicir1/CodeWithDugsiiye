import { useState } from "react";

const App = () => {
    const [name , setName] = useState(" ");
    const handellChange = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={handellChange}/>
            <p>Hello, {name}</p>
        </div>
    );
};

export default App;