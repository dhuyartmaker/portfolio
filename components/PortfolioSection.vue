<template>
  <div id="portfolio" class="portolio__section padding-section margin-section border_radius_port">
    <div class="portfolio-objectives flex flex-row justify-between">
      <h2 class="gradient__text text-2xl font-bold">Objectives</h2>
      <ul class="portfolio-objectives_list ml-14">
        <li>Firmly grasp the knowledge learned and continue to explore, learn more specialized knowledge.</li>
        <li>Actively improve communication skills, teamwork, presentations, ... through activities and work.</li>
        <li>Continue to improve your foreign language skills, especially English.</li>
        <li>Working at a company helps me complete myself in all aspects such as knowledge, skills, discipline,
        responsibility, ..</li>
      </ul>
    </div>
    <div class="portfolio-skills mt-14">
      <h2 class="gradient__text text-2xl font-bold">
        Skills
      </h2>
      <div class="portfolio-skills_list grid grid-cols-3 gap-3">
        <div class="mt-10" v-for="skill in skills" :key="skill">
          <skills-portfolio :name="skill.name" :description="skill.description" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkillsPortfolio from './SkillsPortfolio.vue'
export default {
  components: { SkillsPortfolio },
  name: 'PortfolioSection',
  data() {
    return {
      skills: [
        {
          name: "OS",
          description: "MacOS, Ubuntu, Window"
        },
        {
          name: "Program Languege",
          description: "Javascript/Typescript, NodeJS, HTML, CSS"
        },
        {
          name: "Database",
          description: "MongoDb, MySQL",
        },
        {
          name: "Framework",
          description: "ExpressJS, ReactJS, NextJs"
        },
        {
          name: "English",
          description: "CEF: B2"
        },
        {
          name: "My learning",
          description: "I am learning Docker, K8s"
        },
      ]
    }
  }
}
</script>
<style>
  .portolio__section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: var(--color-footer);

    /* ff 3.6+ */
    background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* safari 5.1+,chrome 10+ */
    background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* opera 11.10+ */
    background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* ie 10+ */
    background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    /* global 92%+ browsers support */
    background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .portfolio-objectives_list {
    color: var(--color-text)
  }
</style>