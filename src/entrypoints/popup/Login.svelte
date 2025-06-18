<script>
  export let loginStatus;
  console.log(loginStatus);
</script>

<div class="login-wrap">
  <a href="https://weread.qq.com{loginStatus === 'timeout' ? '' : '/#login'}" target="_blank"><button type="button" class="mdui-btn mdui-color-theme-accent mdui-ripple">{loginStatus === "timeout" ? "登录超时，前往刷新" : "前往登录"}</button></a>
</div>

<style>
  .login-wrap {
    padding: 10px;
  }
</style>
