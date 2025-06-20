import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// use the import statement to allows us to load codes/modules from other file. This is similar t how we use "require" in express
// this allows access to the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'notyf/notyf.min.css';
import App from './App';

// createRoot() method - assigns the element to be managed by React using its Virtual DOM and store it in the variable "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// created a variable to be displayed in the page
// const name = "John Smith";

// const user = {
//   firstName: "Jane",
//   lastName: "Smith"
// }

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// created a JSX element that utilizes HTML and Javascript to properly load elements in webpage and run logic
// {} - refers to javascript expressions
// const element = <h1>Hello, {formatName(user)}</h1>

// render() method renders the JSX element created in the variable "element" in the index.js to the index.html
// root.render(element);