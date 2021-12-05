import App from "./App.svelte";
import "../node_modules/mdui/dist/css/mdui.min.css";
const instance = axios.create({
  baseURL: 'https://weread.qq.com/web',
  timeout: 2000
});
const app = new App({
  target: document.body,
});
instance.get('/user?userVid=21674592')
export default app;
