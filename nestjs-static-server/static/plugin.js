// // plugin loader
// import React from 'https://unpkg.com/react@18/umd/react.production.min.js';
// import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';

// // this will be loaded from cdn
// import { Plugin } from 'http://127.0.0.1:3001/react-web-plugin.js';

// const loadPlugin = (config) => {
//   const domContainer = document.getElementById('plugin-root');
//   const root = ReactDOM.createRoot(domContainer);
//   root.render(React.createElement(Plugin, { config }));
// };

// // Expose the loadPlugin function to the global scope
// window.loadPlugin = loadPlugin;

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const addPluginRoot = () => {
  const element = document.createElement('div');
  element.id = 'plugin-root';
  document.body.appendChild(element);
};

const loadPluginCss = () => {
  const cssStylesLink = document.createElement('link');
  cssStylesLink.rel = 'stylesheet';
  cssStylesLink.href = 'http://127.0.0.1:3001/style.css';
  document.head.appendChild(cssStylesLink);
};

const loadPlugin = async () => {
  addPluginRoot();
  loadPluginCss();

  try {
    // Load React and ReactDOM UMD builds
    await loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
    await loadScript(
      'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    );

    // Dynamically import the plugin module
    const { Plugin } = await import(
      'http://127.0.0.1:3001/react-web-plugin.js'
    );

    // Initialize and render the plugin
    const loadPlugin = (config) => {
      const domContainer = document.getElementById('plugin-root');
      const root = ReactDOM.createRoot(domContainer);
      root.render(React.createElement(Plugin, { config }));
    };

    // Automatically call loadPlugin if the config is provided in the script tag
    const config = {
      apiKey: 'my-api-key',
    };
    loadPlugin(config);
  } catch (error) {
    console.error('Failed to load scripts or plugin:', error);
  }
};

export { loadPlugin };
