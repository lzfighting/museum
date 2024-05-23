<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
/* CSS初始化样例 */
html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, figure, figcaption, blockquote, dl, dt, dd {
  margin: 0;
  padding: 0;
}
 
body {
  line-height: 1.5;
  font-family: Arial, sans-serif;
}
 
ol, ul {
  list-style: none;
}
 
img, video {
  max-width: 100%;
  height: auto;
}
 
a {
  text-decoration: none;
  color: inherit;
}
</style>
