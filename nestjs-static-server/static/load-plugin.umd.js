(function (global) {
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const addPluginRoot = () => {
    const element = document.createElement("div");
    element.id = "plugin-root";
    document.body.appendChild(element);
  };

  const loadPluginCss = () => {
    const cssStylesLink = document.createElement("link");
    cssStylesLink.rel = "stylesheet";
    cssStylesLink.href = "http://127.0.0.1:3001/style.css";
    document.head.appendChild(cssStylesLink);
  };

  const loadPlugin = async (config) => {
    addPluginRoot();
    loadPluginCss();

    try {
      // Load React and ReactDOM UMD builds
      await loadScript("https://unpkg.com/react@18/umd/react.production.min.js");
      await loadScript("https://unpkg.com/react-dom@18/umd/react-dom.production.min.js");

      // Load the plugin UMD build
      await loadScript("http://127.0.0.1:3001/plugin.umd.js");

      // Ensure the plugin is available globally
      const { Plugin } = global.reactWebPlugin;

      // Initialize and render the plugin
      const domContainer = document.getElementById("plugin-root");
      const root = ReactDOM.createRoot(domContainer);
      root.render(React.createElement(Plugin, { config }));
    } catch (error) {
      console.error("Failed to load scripts or plugin:", error);
    }
  };

  // Expose the loadPlugin function to the global scope
  global.loadPlugin = loadPlugin;
})(window);
