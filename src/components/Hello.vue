<template>
  <div class="hello">
      <h1 class="hello__title">{{ heading }}</h1>
      <router-link to="game" class="hello__getIntoTheGameButton">{{ slogan }}</router-link>
      <audio loop autoplay>
          <source src="../assets/audio/autumn.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
      </audio>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      heading: 'Before the winter',
      slogan: 'Start the story...'
    }
  }
}
</script>

<style>

body {
    background: url(../assets/img/game__back-forest.jpg) no-repeat fixed center center;
    background-size: cover;
}

</style>

<style scoped>

/* TITLE */

.hello__title {
  font-family: "Stay Writer";
  color: #37240d;
  font-size: 10em;
  text-shadow: 0 0 5px #fff;
  font-weight: bold;
  margin-top: 200px;
}

/* GET INTO THE GAME button */

.hello__getIntoTheGameButton {
  font-family: "Stay Writer";
  color: #37240d;
  font-size: 3em;
  text-shadow: 0 0 5px #fff;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  animation-duration: 3s;
  animation-fill-mode: both;
  animation-name: bounce;
  animation-iteration-count: infinite;
}

</style>
