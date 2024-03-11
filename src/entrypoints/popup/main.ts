import "./app.css";
import App from "./App.svelte";

import "mdui/dist/css/mdui.min.css";
import mdui from "mdui";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
