// target html element
const app = document.getElementById('react-test')
const root = ReactDOM.createRoot(app);

// React Component are part of UI (User Interface) of a Website, more likely a smaller building rocks that
// make the entire UI of a website
// To make a React Component we have to make a function that represent the Component

// making components
// React components should be Capitalize
function Header() {
    return (<h1>Develop a website using React</h1>)
}

// Remember React can only render one element!
// If you want to render many compoenents nest them inside a function
function Homepage() {

    //making event handler
    function onChange() {
        console.log("this is a function");
    }

    // React has a set of functions called hooks.
    // Hooks allow you to add additional logic such as state to your components
    // You can think of state as any information in your UI that changes over time, 
    // usually triggered by user interaction.

    //React hook used to manage state is called: useState()
    const [likes, setLikes] = React.useState(0);
    // The first item in the array is the state value,
    // The second item in the array is a function to update the value. 

    function handleClick() {
        setLikes(likes + 1);
    }
    return(
        <div>
            <Header title="React"/>
            <button onClick={onChange}>Share</button>
            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    )
}

// render the element
root.render(<Homepage />) // the script inside this is actually JSX not Javascript
                          // to translate the JSX from Javascript we need compiler such as Babel


// props
// props = components that accept custom arguments (or props) that change the component's behavior 
// or what is visibly shown when it's rendered to the screen.
const src = document.getElementById('react-hero')
const tree = ReactDOM.createRoot(src);

// props as its first function parameter
// Since props is an object, you can use object destructuring to explicitly name 
// the values of props inside your function parameters:
function Hero({title}) {

    //To use the title prop, add curly braces {}.
    // other things we can do with props
    return ( <div>
        <h1>Using a Prop in {title}</h1> 
        <h2>{`Other cool things with ${title}`}</h2>
        </div>
    )
}

function Section() {
    //Iteration
    const foods = ['Spaghetti', 'Pizza', 'Apple'];

    return(
        <div>
            <Hero title="React props concept"/>
            <ul>
                {foods.map((food_name) => (
                    <li key={food_name}>{food_name}</li>
                ))}
            </ul>
        </div>
    )
}

tree.render(<Section />);