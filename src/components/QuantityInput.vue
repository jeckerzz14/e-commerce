<template>
    <section class="qty-wrapper">
        <span class="font-thin">Quantity:</span>
        <v-row no-gutters>
            <v-col cols="6">
                <v-number-input
                    v-model="currentQty"
                    variant="outlined"
                    control-variant="split"
                    :inset="false"
                    :min="minQty"
                    :max="100"
                    :model-value="currentQty"
                ></v-number-input>
            </v-col>
        </v-row>
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
