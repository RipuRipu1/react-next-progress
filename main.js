const app = document.getElementById('O2'); // select an element by ID

const element = document.createElement('h1'); // make new element

// make a text
const text = 'Hello World';
const textContent = document.createTextNode(text);

element.appendChild(textContent); // append aka place the text into the h1 element we just created

app.appendChild(element); // place the h1 element we just created inside the div