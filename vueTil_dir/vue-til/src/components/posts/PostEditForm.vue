<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p class="validation-text warning" v-if="!isContentsValid">
						Contents must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
	name: 'PostEditForm',
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length < 200;
		},
	},
	methods: {
		async submitForm() {
			const id = this.$route.params.id;
			try {
				await editPost(id, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data.message;
			}
		},
	},
	async created() {
		const { data } = await fetchPost(this.$route.params.id);
		this.title = data.title;
		this.contents = data.contents;
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
