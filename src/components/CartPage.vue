<template>
        <NavBar />
        <div class="w-full md:w-1/2 mx-auto">
            <div class="rounded-lg shadow-lg bg-white p-4 mt-[150px]">
                <div class="flex items-center">
                    <!-- Left side (image) -->
                    <div class="mr-4">
                        <img :src="details.image" alt="Product Image" class="w-[300px] object-cover">
                    </div>

                    <!-- Right side (title and price) -->
                    <div>
                        <h2 class="sm:text-lg text-sm font-semibold">{{ details.title }}</h2>
                        <p class="text-gray-600 sm:text-lg text-sm">Original Price: {{ details.price }}</p>
                        <!-- Calculate and display price with GST -->
                        <p class="text-gray-600 sm:text-lg text-sm">Price with 18% GST:₹{{
                            calculatePriceWithGST(details.price)
                        }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
import NavBar from './NavBar.vue';
export default {
    name: 'CartPage',
    components: {
        NavBar,
    },
    data() {
        return {
            details: this.$route.params
        }
    },
    methods: {
        calculatePriceWithGST(price) {
            // Check if price is defined
            if (typeof price === 'string' && price.trim() !== '') {
                // Remove currency symbol and commas, then parse as float
                const numericPrice = parseFloat(price.replace(/[^\d.]/g, ''));

                // Check if the parsed price is a valid number
                if (!isNaN(numericPrice)) {
                    // Calculate the price with GST (18%)
                    const gstRate = 0.18; // GST rate (18%)
                    const priceWithGST = numericPrice * (1 + gstRate);
                    return priceWithGST.toFixed(2); // Return the calculated price with 2 decimal places
                } else {
                    return 'Invalid Price';
                }
            } else {
                return 'Price not available';
            }
        }
    },
    created() {
        if (this.$route.params.id !== undefined)
            localStorage.setItem("details", JSON.stringify(this.$route.params))
    },
    mounted() {
        this.details = JSON.parse(localStorage.getItem("details"))
    },
};
</script>