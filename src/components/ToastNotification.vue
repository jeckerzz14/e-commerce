<template>
    <div class="text-center">    
        <v-snackbar
          v-model="SNACK_BAR"
          :timeout="timeout"
		  top
        >
          {{ message }}
    
          <template v-slot:actions>
            <v-btn
              color="blue"
              variant="text"
              @click="closeSnackbar"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: "ToastNotification",
    props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		message: {
			type: String,
			required: true,
		},
		timeout: {
			type: Number,
			default: 2000,
			required: false,
		},
    },
	computed: {
		SNACK_BAR: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	},
	methods: {
		showSnackbar() {
			this.$emit('update:snackbar', true);
		},
		closeSnackbar() {
			this.SNACK_BAR = false;
		}
	},
}
</script>