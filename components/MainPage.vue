<!-- Please remove this file from your project -->
<template>
  <div class="global gradient__bg">
    <portfolio-navbar />
    <intro-header />
    <break-section />
    <portfolio-section />
    <education-section />
    <work-experience />
    <break-section />
    <more-about-me />
    <!-- <footer-section /> -->
  </div>
</template>

<script>
import BreakSection from './BreakSection.vue'
import EducationSection from './EducationSection.vue'
import FooterSection from './FooterSection.vue'
import IntroHeader from './IntroHeader.vue'
import MoreAboutMe from './MoreAboutMe.vue'
import PortfolioNavbar from './PortfolioNavbar.vue'
import PortfolioSection from './PortfolioSection.vue'
import WorkExperience from './WorkExperience.vue'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { PortfolioNavbar, IntroHeader, PortfolioSection, BreakSection, FooterSection, EducationSection, WorkExperience, MoreAboutMe },
  name: 'MainPage',
}
</script>
