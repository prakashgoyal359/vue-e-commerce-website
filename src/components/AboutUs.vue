<template>
    <div class=" bg-black">
        <NavBar />
        <div class=" relative">
            <img class="w-full h-screen" src="../assets/aboutusimg.jpg" alt="">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 class="md:text-[60px] text-[30px] text-green-600 font-extrabold mt-[90px] mb-5">ABOUT RAZER</h1>
                <h3 class="md:text-2xl text-xl text-center text-white font-semibold mb-8">Razer™ is the world’s leading
                    lifestyle brand for gamers.</h3>
                <p class="text-lg text-gray-500 text-center">The triple-headed snake trademark of Razer is one of the most
                    recognized logos in the global gaming and esports communities. With a fan base that spans every continent, the company has
                    designed and built the world’s largest gamer-focused ecosystem of hardware, software and services..</p>
            </div>
        </div>
        <div>
            <FooterComponent />
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: 'AboutUs',
    components: {
        NavBar,
        FooterComponent,
    }
}
</script>