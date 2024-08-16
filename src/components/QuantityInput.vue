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
                    :min="1"
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
    components: {
        VNumberInput,
    },
    data() {
        return {
            currentQty: 1,
        };
    },
    watch: {
        currentQty(val) {
            this.$emit('changeQty', val);
        },
    }
}
</script>
