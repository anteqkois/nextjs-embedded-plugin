import { useEffect } from "react";

const Plugin = ({ config }) => {
  useEffect(() => {
    // Your initialization logic here
    console.log("Plugin initialized with config:", config);
  }, [config]);

  return (
    <div id="my-plugin-container">
      <h1>My Plugin UI</h1>
      <p>This is your plugin's user interface.</p>
    </div>
  );
};

export default Plugin;
