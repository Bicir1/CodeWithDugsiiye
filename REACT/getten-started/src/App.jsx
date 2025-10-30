import { useState } from "react";

const App = () => {
    const [isVisible , setisVisible] = useState(false);
    const toggle =() => {
        setisVisible(!isVisible)
    }
    return (
        <div>
            <button onClick={toggle}>{isVisible ? "Hide" : "Show"}Message</button>
            {isVisible && <p>This is message</p>}
        </div>
    );
};

export default App;