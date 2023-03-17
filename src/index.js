import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactDOMClient from "react-dom/client";

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);