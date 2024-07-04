import { useEffect } from "react";

export interface PluginConfig {
  welcomeText: string;
}

const Plugin = ({ config }: { config: PluginConfig }) => {
  useEffect(() => {
    // Your initialization logic here
    console.log("Plugin initialized with config:", config);
  }, [config]);

  return (
    <div id="my-plugin-container">
      <h1>My Plugin UI</h1>
      <p>This is your plugin&apos;s user interface.</p>
      {config.welcomeText}
    </div>
  );
};

export default Plugin;
