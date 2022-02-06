<script>
  import List from "./List.svelte";
  import Login from "./Login.svelte";
  let loading = true;
  let user = { loggedIn: false,loginStatus:'unlogin'};
  function judgeIsLogin() {
    fetch("https://i.weread.qq.com/user/profile")
      .then((response) => response.json())
      .then((data) => {
        loading = false;
        if (!data.errcode) {
          user.loggedIn = true;
          return;
        }
        user.loggedIn = false;
        switch (data.errcode) {
          case -2012: {
            //登录超时
            user.loginStatus='timeout';
          }
          case -2010:
          default: {
            break;
          }
        }
      });
  }
  judgeIsLogin();
</script>

{#if loading}
  <div class="mdui-spinner">
    <div class="mdui-spinner-layer ">
      <div class="mdui-spinner-circle-clipper mdui-spinner-left">
        <div class="mdui-spinner-circle" />
      </div>
      <div class="mdui-spinner-gap-patch">
        <div class="mdui-spinner-circle" />
      </div>
      <div class="mdui-spinner-circle-clipper mdui-spinner-right">
        <div class="mdui-spinner-circle" />
      </div>
    </div>
  </div>
{/if}
{#if !loading}
  <div class="root-app mdui-theme-primary-indigo mdui-theme-accent-indigo">
    {#if user.loggedIn}
      <List />
    {/if}
    {#if !user.loggedIn}
      <Login loginStatus={user.loginStatus}/>
    {/if}
  </div>{/if}

<style>
  .root-app {
    width: fit-content;
  }
</style>
