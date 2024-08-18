<template>
    <v-bottom-navigation>
        <section class="socials-container">
            <v-icon color="blue-darken-3" size="28" class="cursor-pointer" @click="redirect('github')">mdi-github</v-icon>
            <v-icon color="blue-darken-3" size="28" class="cursor-pointer" @click="redirect('linkedin')">mdi-linkedin</v-icon>
        </section>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        redirect(social) {
            switch (social) {
                case 'github':
                    window.open('https://www.github.com/jeckerzz14', '_blank');
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/jerickdtorres/', '_blank');
                    break;
                default:
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.socials-container {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>