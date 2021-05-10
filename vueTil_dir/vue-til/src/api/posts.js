// 학습 노트 CRUD API
import { posts } from './index';

// 학습노트 데어터 목록 조회 api
function fetchPosts() {
	return posts.get('/');
}

// 특정학습노트를 조회하는 api
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습노트 삭제
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습노트 수정
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
