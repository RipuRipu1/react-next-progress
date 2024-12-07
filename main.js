const main = document.getElementById('O2'); // select an element by ID

const element = document.createElement('h1'); // make new element

// make a text
const text = 'Hello World';
const textContent = document.createTextNode(text);

element.appendChild(textContent); // append aka place the text into the h1 element we just created

app.appendChild(element); // place the h1 element we just created inside the div

// target html element
const app = document.getElementById('react-test')
const root = ReactDOM.createRoot(app);

// render the element
root.render(<h1>Hello World</h1>)