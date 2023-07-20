<template>
  <div class="work__experience padding-section mt-10">
    <h2 class="gradient__text font-bold text-4xl">Work Experience</h2>
    <div class="work__experience-list flex flex-col">
      <div v-for="work in works" :key="work">
        <work-by-time :work="work" />
      </div>
    </div>
  </div>
</template>
<script>
import WorkByTime from './WorkByTime.vue'
export default {
  components: { WorkByTime },
  name: 'WorkExperience',
  data() {
    return {
      works: [
        {
          time: '02/2023-06/2023',
          workAt: 'Ninecode',
          name: 'Admin Ninecode System',
          description: "This is Admin microservice system. Include gateway api, content service, website and cms page.",
          technology: "ExpressJs, ReactJs",
          responsibility: `First time working as a supporter for the entire CMS System. Spend 20% of the time managing and supporting team members and 80% coding.
Have a clear understanding of the entire microservice architecture, including gateway APIs and multiple services. Build a microservice system to manage accounts, blogs, and multi-language support for products.Write structure - API documents. Accurately estimate task times for team members.
Work with superiors to find solutions and manage the project schedule.`
        },
        {
          time: '07/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Vietcan Website',
          description: "SEO page Vietcan and CMS. (https://vietcan.com)",
          technology: "ExpressJs, ReactJs, NextJs",
          responsibility: `Clone Wordpress Web and rebuild it with MERN Stack. Develop a monolithic backend that includes login, file uploading, account and blog management, covering all features needed for SEO And Manage Landing Page.
Suggest, start learning, and develop a Landing page with NextJs, utilizing caching with SWR and ISR to achieve high-performance website loading.
Use ReactJs and MUI to develop a CMS with a main feature of drag & drop components for creating various UI templates.`
        },
        {
          time: '06/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Qrcode-gen / Ninequiz ',
          description: "This is creating qrcode web. (https://qrcode-gen.com)",
          technology: "ExpressJs, ReactJs",
          responsibility: `Work as a Fullstack JS Web Developer and use MongoDB consistently. 
Apply many modern design patterns to MongoDB to design Schema. Maintain and fix bugs for both products.Suggest solutions help dealing high request concurrency when student access quiz to contest, refactor API structure, perform queries at Cronjob, and create indexes to deal with high CPU usage on the Mongo server. Research  Replica, and Sharding.
Extend Payment feature and use gRPC to synchronize payment data.
Utilize Redis caching for user information to improve request time (~500ms).
Can work independently from basic design to development. Divide tasks into smaller parts, estimate, and complete them before the deadline.
Start code review for team members to ensure clean JavaScript code practices.
Develop new features such as PDF Qrcode. Integrate with the AI team to create a Bot Chat - using OpenAI API.
Create Business Card feature with many dynamic template, using MUI, Redux Saga to develop.`
        },
        {
          time: '01/2021-05/2022',
          workAt: 'Hybrid Technologies',
          name: 'Aircloset/Airtripstay',
          description: "This is big system serve buy, rent clothes in Japan.",
          technology: "NodeJs (ExpressJs, NestJs, Koa, Fastify,...), ReactJs, Angular 1, React Native",
          responsibility: "I do everything work relate development application. Such as writing DD, develop for frontend and backend, manual testing, write automation test for frontend, deploy..."
        },
        {
          time: '12/2021-01/2022',
          workAt: 'Hybrid Technologies',
          name: 'Stayway',
          description: "An web application providing subsidy policy from the government",
          technology: "NuxtJs",
          responsibility: "Supporter for frontend development."
        },
        {
          time: '12/2020 - 7/2021',
          workAt: 'HCMUS',
          name: 'Family Tree',
          description: "This is an app help user create Family Tree which save information of family's members.",
          technology: "ReactJs, Redux, GoJs",
          responsibility: 'I work as a Frontend Developer. Beside, I help my team manage project and design structure'
        },        
      ]
    }
  }
}
</script>
<style>
  
</style>