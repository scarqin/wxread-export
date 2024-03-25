import "./app.css";
import App from "./App.svelte";

import "mdui/mdui.css";
import "mdui";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
