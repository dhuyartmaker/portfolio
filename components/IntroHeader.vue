<template>
  <div class="intro__header padding-section flex flex-row mt-32">
    <div class="intro__header-information flex-1 flex flex-col justify-center">
      <div class="intro__header-name">
        <p class="gradient__text font-bold text-8xl tracking-tighter">Huỳnh Đức Huy</p>
      </div>
      <p class="text-white mt-10 text-4xl">
        Software Engineer
      </p>
      <p class="intro__header-information_resume text-white mt-5 text-2xl tracking-wide">
        I am a student at Ho Chi Minh City University of Science and a Software Engineer about 1 year.
        I am friendly with Web as Javascript Fullstack Developer.
      </p>
    </div>
    <div class="intro__header-avatar ml-10 flex-1 flex justify-center items-center">
      <img class="border_radius_port" src="~/assets/avatar.jpg"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IntroHeader'
}
</script>
<style>
  .intro__header-avatar img {
    width: 100%;
    height: 100%;
  }
  .intro__header-information_resume {
    color: var(--color-text)
  }
</style>