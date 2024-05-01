<template>
    <div class=" bg-gray-800">
        <div>
            <NavBar />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] p-[40px] gap-6">
            <div v-for="product in products" :key="product.id" 
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-green-500">
                <a href="#">
                    <img class="rounded-t-lg" v-bind:src=product.image alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.title }}
                        </h5>
                    </a>
                    <div class="flex pt-4 items-center justify-between">
                        <span class="text-3xl  font-bold text-gray-900 dark:text-white">{{ product.price }}</span>
                        <button v-on:click="CartPage(product)"
                            class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Add
                            to cart</button>
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
import FooterComponent from './FooterComponent.vue';
export default {
    components: {
        NavBar,
        FooterComponent,
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        
    },
    methods:{
        CartPage(product) {
            this.$router.push({ name: "cart-page", params:product })
        }
    }
}
</script>