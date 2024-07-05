import { Plugin } from "../lib/components/Plugin";

function App() {
  return (
    <main className="bg-slate-950 min-h-screen min-w-full">
      <Plugin config={{ welcomeText: "My custom welcome text" }} />
    </main>
  );
}

export default App;
