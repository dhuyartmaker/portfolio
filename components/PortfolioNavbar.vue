<!-- Please remove this file from your project -->
<template>
	<div class="portfolio__navbar flex justify-between px-16 pt-8">
		<div class="flex flex-row sm:text-sm md:text-2xl">
			<!-- <div class="portfolio__navbar-logo sm:hidden md:block flex items-center text-white">
				--Artmaker--
			</div> -->
			<div class="portfolio__navbar-tags flex flex-1 flex-row items-center ml-10 text-white">
				<p><a href="#about">About</a></p>
				<p><a href="#portfolio">Portfolio</a></p>
				<p><a href="#more">More</a></p>
				<p><a href="/HUYNH-DUC-HUY-CV.pdf" download >MyCV</a></p>
			</div>
		</div>
		<div class="portfolio__navbar-social_network relative flex justify-end items-center">
			<a href="https://www.facebook.com/duchuy24sbtc" target="_blank">
				<img src="https://img.icons8.com/office/30/000000/facebook-new.png"/>
			</a>
			<a href="https://www.instagram.com/huydayhuymapday1/" target="_blank">
				<img src="https://img.icons8.com/office/30/000000/instagram-new.png"/>
			</a>
			<img  @click="clickToggle" src="https://img.icons8.com/fluency/30/000000/menu--v2.png"/>
			<div class="portfolio__navbar-menu absolute flex flex-col top-12" v-if="showToggle">
				<p><a href="#about">About</a></p>
				<p><a href="#portfolio">Portfolio</a></p>
				<p><a href="#more">More</a></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PortfolioNavbar',
	data() {
		return {
			showToggle: false
		}
	},
	methods: {
		clickToggle() {
			this.showToggle = !this.showToggle;
		}
	},
}
</script>

<style>
	.portfolio__navbar-tags p {
		padding: 0 1rem;
		cursor: pointer;
	}
	.portfolio__navbar-social_network img {
		padding-left: 0.5rem;
		cursor: pointer;
	}
	.portfolio__navbar-menu {
		background-color: var(--color-footer);
		padding: 0.5rem 1rem;
		width: 180px;
	}
	.portfolio__navbar-menu p {
		color: white;
		text-align: end;
		padding: 0.5rem 0;
		cursor: pointer;
	}
</style>
