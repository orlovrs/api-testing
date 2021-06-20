<template>
	<b-alert :variant="variant" show>
		<b-icon icon="exclamation-triangle" class="mr-2" />
		{{ message }}
	</b-alert>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: false,
			default: 'Default message'
		},
		variant: {
			type: String,
			required: false,
			default: 'info'
		}
	}
}
</script>
