<template>
    <div class="bg-gray-800">
    <div>
        <NavBar />
    </div>
    
        <div class=" cursor-pointer md:mt-6 mt-11 md:relative md:z-0 ">
            <Swiper :pagination="true" :modules="modules" class="mySwiper">
                <swiper-slide><img src="../assets/ImagesSlider/photo_1.jpg" alt="..."></swiper-slide>
                <swiper-slide><img src="../assets/ImagesSlider/photo_2.jpg" alt="..."></swiper-slide>
                <swiper-slide><img src="../assets/ImagesSlider/photo_3.jpg" alt="..."></swiper-slide>
            </Swiper>
        </div>
        <div>
  <div class="flex flex-col md:flex-row relative">
    <div class="md:w-1/2 md:mr-3 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img1.jpg" alt="Left Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">power traveler bundle</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">razer clade 14 + gan charger</h4>
      </div>
    </div>
    <div class="md:w-1/2 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img2.jpg" alt="Right Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">new razer blade 16</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">fastest.sharpest.clearest.</h4>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row relative">
    <div class="md:w-1/2 md:mr-3 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img3.jpg" alt="Left Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">razer iskur v2</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">perfect gaming form</h4>
      </div>
    </div>
    <div class="md:w-1/2 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img4.jpg" alt="Right Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">razer firefly v2 pro</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">full-blown illumination</h4>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row relative">
    <div class="md:w-1/2 md:mr-3 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img5.jpg" alt="Left Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">the razer esports line</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">trusted by pros.made for winners.</h4>
      </div>
    </div>
    <div class="md:w-1/2 cursor-pointer md:mt-6 mt-2 relative">
      <img src="../assets/ImagesSlider/img6.jpg" alt="Right Image" class="w-full">
      <div class="absolute inset-0 flex flex-col items-center text-white p-4">
        <h1 class="sm:text-[50px] text-[25px] font-semibold capitalize">light up the fight</h1>
        <h4 class="sm:text-[20px] text-[15px] capitalize">discover our themed specials</h4>
      </div>
    </div>
  </div>
</div>
        <div>
            <FooterComponent />
        </div>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FooterComponent from './FooterComponent.vue';


export default {
    name: 'HomePage',
    components: {
        NavBar,
        Swiper,
        SwiperSlide,
        FooterComponent,
    },
    setup() {
        return {
            modules: [Pagination]
        }
    }
}
</script>