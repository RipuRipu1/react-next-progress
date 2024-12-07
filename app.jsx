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
    return(
        <div>
            <Header />
        </div>
    )
}

// render the element
root.render(<Homepage />) // the script inside this is actually JSX not Javascript
                                  // to translate the JSX from Javascript we need compiler such as Babel