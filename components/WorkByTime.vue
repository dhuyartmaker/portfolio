<template>
  <div class="text-white flex flex-row text-2xl mt-7">
    <div class="work__time-line relative w-5 h-['inherit'] flex flex-col items-center">
      <div class="timeline rounded-full w-6 h-6 z-10"></div>
      <div class="timeline absolute top-3 rounded h-full w-1"></div>
    </div>
    <div class="ml-6">
      <div class="work__experience-time text-color-text">
        {{ work.time }}
      </div>
      <div class="work__experience-name mt-16 grid grid-cols-2 gap-8 text-xl">
        <span class="font-bold text-color-text italic">Project:</span>
        <p class="ml-5">{{ work.name }}</p>
        <span class="font-bold text-color-text italic">Work at:</span>
        <p class="ml-5">{{ work.workAt }}</p>
        <span class="font-bold text-color-text italic">Description:</span>
        <p class="ml-5">{{ work.description }}</p>
        <span class="font-bold text-color-text italic">Technology:</span>
        <p class="ml-5">{{ work.technology }}</p>
        <span class="font-bold text-color-text italic">Responsibility:</span>
        <p class="ml-5">{{ work.responsibility }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WorkByTime',
  props: {
    work: {
      time: String,
      workAt: String,
      name: String,
      description: String,
      reponsibility: String,
    }
  }
}
</script>
<style>
  .timeline {
    background: var(--gradient-text)
  }
</style>