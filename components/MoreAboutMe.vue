<template>
  <div id="more" class="more__me padding-section selection:bg-yellow-300">
    <div class="flex flex-row items-center">
      <img src="~/assets/go1.jpg" class="rounded-full w-6/12">
      <div class="text-white ml-20 text-2xl">
        <h3 class="font-bold text-color-text text-4xl">Huynh Duc Huy</h3>
        <p class="mt-5">Birthday: 24 / 11 / 1999</p>
        <p>Hometown: Mo Cay Nam, Ben Tre</p>
      </div>
    </div>
    <div class="more__me-bg rounded-lg text-white p-4 my-10">
      <p>Beside is a developer. In my free time, I'm immersed in art.</p>
      <h2 class="text-2xl font-bold">Music</h2>
      <p>When I was child, i had a big inspired with music. I can sing, dance and every things with music although i do this not good 🐧</p>
      <div class="flex flex-row items-center">
        <a href="https://soundcloud.com/hu-nh-c-huy-18693223" target="_blank">
          <img src="https://img.icons8.com/bubbles/100/000000/soundcloud.png"/>
        </a>
        <p>You can hear my voice in sound cloud :v </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoreAboutMe'
}
</script>
<style>
  .more__me-bg {
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
  }
</style>