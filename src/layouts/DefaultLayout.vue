<template>
    <v-app>
        <v-main>
            <Header />
            <div>
                <slot></slot>
            </div>
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

<style lang="scss" scoped>
  @import "@/assets/styles/settings/_colors.scss";

  main {
    background-color: $shade-hover;
  }
</style>