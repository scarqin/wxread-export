<script>
  export let loginStatus;
  console.log(loginStatus);
</script>

<div class="login-wrap">
  <mdui-button href="https://weread.qq.com{loginStatus === 'timeout' ? '' : '/#login'}" target="_blank">{loginStatus === "timeout" ? "登录超时，前往刷新" : "前往登录"}</mdui-button>
</div>

<style>
  .login-wrap {
    padding: 10px;
  }
</style>
