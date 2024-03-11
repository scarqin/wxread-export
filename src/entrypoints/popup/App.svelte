<script>
  import List from "./List.svelte";
  import Login from "./Login.svelte";
  let loading = true;
  let user = { loggedIn: false, loginStatus: "unlogin" };

  function judgeIsLogin() {
    fetch("https://i.weread.qq.com/friend/ranking?mine=1")
      .then((response) => response.json())
      .then((data) => {
        loading = false;
        if (!data.errcode) {
          user.loggedIn = true;
          Object.assign(user, data.ranking[0].user);
          return;
        }
        user.loggedIn = false;
        switch (data.errcode) {
          case -2012: {
            //登录超时
            user.loginStatus = "timeout";
          }
          case -2010:
          default: {
            break;
          }
        }
      })
      .catch((e) => {
        loading = false;
        user.loggedIn = false;
        console.error(e);
      });
  }
  judgeIsLogin();
</script>

{#if loading}
  <mdui-button-icon loading icon="search" variant="tonal"></mdui-button-icon>
{/if}
{#if !loading}
  <div class="root-app mdui-theme-primary-indigo mdui-theme-accent-indigo">
    {#if user.loggedIn}
      <List userVid={user.userVid} />
    {/if}
    {#if !user.loggedIn}
      <Login loginStatus={user.loginStatus} />
    {/if}
  </div>{/if}

<style>
  .root-app {
    width: fit-content;
  }
</style>
