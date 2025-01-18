import React from "react"; //import react into the bundle
import ReactDOM from "react-dom/client"; // import ReactDOM
import "../styles/index.css"; // include your styles into the webpack bundle
import Home from "./component/Home.jsx"; //import your own components

// Render your react application
//                  donde?                          qué?
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

