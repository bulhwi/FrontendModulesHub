<template>
	<div>
		<h1 class="page-header">회원 가입 페이지</h1>
		<SignupForm></SignupForm>
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
	name: 'signupPage',
	components: {
		SignupForm,
	},
};
</script>

<style scoped></style>
