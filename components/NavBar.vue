<template>
	<div class="mx-auto text-white bg-gray-900 p-5">
		<nav class="flex-row md:justify-between">
			<div class="flex flex-row justify-between">
				<Logo />
			</div>
			<ul class="flex">
				<li class="pr-5"><NuxtLink to="/">Home</NuxtLink></li>
				<li class="pr-5"><NuxtLink to="/collection">Collection</NuxtLink></li>
				<li class="pr-5"><NuxtLink to="/about-us">About us</NuxtLink></li>
				<li class="pr-5"><NuxtLink to="/contact">Contact</NuxtLink></li>
			</ul>
		</nav>
	</div>
</template>



<style scoped>
.active{
        display: block;
    }  
</style>