// plugin loader
import React from "https://unpkg.com/react@18/umd/react.production.min.js";
import ReactDOM from "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";

// this will be loaded from cdn
import { Plugin } from "http://127.0.0.1:3001/react-web-plugin.js";

const loadPlugin = (config) => {
  const domContainer = document.getElementById("plugin-root");
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(Plugin, { config }));
};

// Expose the loadPlugin function to the global scope
window.loadPlugin = loadPlugin;
