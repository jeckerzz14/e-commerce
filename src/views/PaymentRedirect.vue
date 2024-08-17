<template>
  <DefaultLayout>
    <v-container class="v-col-6" fluid>
        <v-row>
            <v-col cols="12">
                <v-sheet class="payment-container" elevation="1" border rounded>
                    <div class="message-wrapper">
                        <h4 class="font-bold text-h6 py-3">{{ success.title }}</h4>
                        <p class="font-thin">{{ success.message }}</p>
                        <v-btn text="GO BACK TO HOME" variant="tonal" color="orange-darken-1" size="large" class="my-5" @click="goToHomepage"></v-btn>
                    </div>
                    
                    <img src="@/assets/images/payment_success.png" alt="Girl shopping in an app" width="300" height="300"/>    
                </v-sheet>
            </v-col>    
        </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {    
    name: "PaymentRedirect",
    components: {
        DefaultLayout,
    },
    data() {
        return {
            success: {
                title: "Thank You for Your Purchase!",
                message: "Your order has been successfully processed. A confirmation email with your order details and tracking information is on its way. We appreciate your business and hope you enjoy your new items. If you need any help, our support team is here for you. Thank you for shopping with us!",
            },
        };
    },
    methods: {
        goToHomepage() {
            this.$router.push('/');
        },
    },
}
</script>

<style lang="scss" scoped>
.payment-container {
    display: grid;
    grid-template-columns: 1.5fr .5fr;
    gap: 2rem;
    align-items: center;
    padding: 1.5rem;
}
img {
    border-radius: 8px;
}
</style>