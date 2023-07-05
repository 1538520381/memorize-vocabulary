<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
  
<script>

export default {
    name: 'App'
}
</script>
  
<style>
html {
    width: 100%;
    height: 100%;

}

body {
    width: 100%;
    height: 100%;
    margin: 0px;
}

#app {
    width: 100%;
    height: 100%;
}

div {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>