<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
require('normalize.css')

export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}

/* FONTS */

@font-face {
	font-family: 'Stay Writer';
	src: url('assets/fonts/Stay_Writer.eot');
	src: local('☺'), url('assets/fonts/Stay_Writer.woff') format('woff'), url('assets/fonts/Stay_Writer.ttf') format('truetype'), url('assets/fonts/Stay_Writer.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

/*ANIMATIONS */

@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes bounce {
   0% { opacity: 1 }
   50% { opacity: 0.6 }
   100% { opacity: 1 }
}
</style>
