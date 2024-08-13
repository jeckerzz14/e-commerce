<template>
    <DefaultLayout>
        <v-container class="v-col-9">
        
        </v-container>
    </DefaultLayout>
</template>

<script>
// Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
    name: "Product",
    components: {
        DefaultLayout,
    },
    data() {
        return {
            id: this.$route.params?.id,
        };
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>