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
          responsibility: "Manage task (4 members) and intergrating multi language, manage news, and SEO for React app."
        },
        {
          time: '07/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Vietcan Website',
          description: "SEO page Vietcan and CMS. (https://vietcan.com)",
          technology: "ExpressJs, ReactJs, NextJs",
          responsibility: "Manage task (2 members) and review code. Design schema, coding backend, frontend. Research and give solution for create UI template as Wordpress structure."
        },
        {
          time: '07/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Ninequiz',
          description: "This is creating and managing quiz website (https://ninequiz.com)",
          technology: "ExpressJs, ReactJs",
          responsibility: "Design schema, support backend optimization and find solution for requirement. Intergrating new feature ChatGPT into app. Supporter for performance testing Gateway service."
        },
        {
          time: '07/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Qrcode-gen',
          description: "This is creating qrcode web. (https://qrcode-gen.com)",
          technology: "ExpressJs, ReactJs",
          responsibility: "Maintain and develop new feature for creating Qrcode system. Develop microservice system using MERN stack, gRPC, Redis. Design schema, optimize DB and backend by intergrating Redis. Sync payment data between services. Manage and deploy dev server."
        },
        {
          time: '07/2022-06/2023',
          workAt: 'Ninecode',
          name: 'Ninecard',
          description: "This is create and manage Vcard website. (https://ninecard.one)",
          technology: "ExpressJs, ReactJs",
          responsibility: "I work independence for building website."
        },
        {
          time: '02/2022-05/2022',
          workAt: 'Hybrid Technologies',
          name: 'Aircloset',
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
          time: '02/2021 - 10/2021',
          workAt: 'Hybrid Technologies',
          name: 'AirtripStay',
          description: "This is an admin app help them manage listing, home, apartment,... which linked from Airbnb. Syncronize data from Airbnb and provide API for other partners as Checkin, Cleaning,...",
          technology: "NodeJs (ExpressJs), ReactJs, Redux",
          responsibility: 'In work, i am a FullStack Developer. I am resonsibility for fixing bugs and developing new feature on Frontend end Backend'
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