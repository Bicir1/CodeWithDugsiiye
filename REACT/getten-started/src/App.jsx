const Greeting = (props) =>{
    return (
        <h1>Name : {props.name} Age : {props.age}</h1>
    )
}

const App = () => {
    return (
        <div>
        <Greeting name="Bicir" age="24" />
        </div>
    );
};

export default App;