<template>
    <v-app>
        <v-main>
            <Header />
            <main>
                <slot></slot>
            </main>
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
// Components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
