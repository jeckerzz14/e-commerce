<template>
    <section class="qty-wrapper">
        <span v-if="showText" class="font-thin">Quantity:</span>
        <v-number-input
            v-model="currentQty"
            variant="outlined"
            control-variant="split"
            :inset="false"
            :min="minQty"
            :max="100"
            :model-value="currentQty"
        ></v-number-input>
    </section>
</template>

<script>
// Components
import { VNumberInput } from 'vuetify/labs/VNumberInput';

export default {
    name: "QuantityInput",
    props: {
        modelValue: {
            type: Number,
            required: false,
        },
        minQty: {
            type: Number,
            default: 1,
            required: false,
        },
        showText: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    data(){
        return {
            currentQty: 0,
        }
    },
    mounted() {
        this.currentQty = this.modelValue;
    },
    components: {
        VNumberInput,
    },
    watch: {
        currentQty(val) {
            this.$emit('changeQty', val)
        },
    },
}
</script>
