// target html element
const app = document.getElementById('react-test')
const root = ReactDOM.createRoot(app);

// render the element
root.render(<h1>NULL 1</h1>) // the script inside this is actually JSX not Javascript
                                  // to translate the JSX from Javascript we need compiler such as Babel