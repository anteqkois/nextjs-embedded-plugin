import { useEffect, useState } from "react";

export interface PluginConfig {
  welcomeText: string;
}

export const Plugin = ({ config }: { config: PluginConfig }) => {
  const [enableChat, setEnableChat] = useState(false);

  useEffect(() => {
    console.log("Plugin initialized with config:", config);
  }, [config]);

  return (
    <>
      <button
        className="fixed bottom-2 right-2 border border-purple-700 px-4 py-2 rounded-md"
        onClick={() => setEnableChat((prev) => !prev)}
      >
        Open
      </button>
      {enableChat ? (
        <div
          id="my-plugin-container"
          className="fixed bottom-16 right-2 border border-purple-700 px-4 py-2 rounded-md"
        >
          <h1>My Plugin UI</h1>
          <p>This is your plugin&apos;s user interface.</p>
          <p>Plugin configuration.</p>
          <code>{JSON.stringify(config)}</code>
        </div>
      ) : null}
    </>
  );
};