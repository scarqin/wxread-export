import App from "./App.svelte";
import "../node_modules/mdui/dist/css/mdui.min.css";
const app = new App({
  target: document.body,
  class:'mdui-theme-accent-indigo'
});
export default app;
