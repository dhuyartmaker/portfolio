<template>
  <div class="skills__portfolio w-full">
    <div class="w-8 bg-yellow-50 h-1"></div>
    <h3 class="text-white font-bold mt-2">{{ name }}</h3>
    <p class="">{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'SkillsPortfolio',
  props: {
    name: String,
    description: String,
  }
}
</script>
<style>
  .skills__portfolio p {
    color: var(--color-text)
  }
</style>