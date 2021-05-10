// 학습 노트 CRUD API
import { posts } from './index';

// 학습노트 데어터 조회 api
function fetchPosts() {
	return posts.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습노트 삭제
function deletePost(postId) {
	return posts.delete(postId);
}

export { fetchPosts, createPost, deletePost };
