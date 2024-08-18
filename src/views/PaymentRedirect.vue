<template>
    <DefaultLayout>
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
              <v-sheet class="payment-container" elevation="1" border rounded>
                <div class="message-wrapper">
                  <h4 class="font-bold text-h6 py-3">{{ CONTENT.paymentSuccess.title }}</h4>
                  <p class="font-thin">{{ CONTENT.paymentSuccess.message }}</p>
                  <v-btn :text="CONTENT.buttonText.goBackHome" variant="tonal" color="orange-darken-1" size="large" class="my-5" @click="goToHomepage"></v-btn>
                </div>
                
                <img src="@/assets/images/payment_success.png" alt="Girl shopping in an app" class="responsive-img mx-auto" />
              </v-sheet>
            </v-col>    
          </v-row>
        </v-container>
    </DefaultLayout>
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Static
import STATIC_CONTENT from "@/static/content.json";

export default {    
    name: "PaymentRedirect",
    components: {
        DefaultLayout,
    },
    computed: {
        CONTENT() {
			return STATIC_CONTENT;
		},
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
    max-width: 100%;
    height: auto;
}
</style>