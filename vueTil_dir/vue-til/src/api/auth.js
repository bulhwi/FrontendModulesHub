// 로그인, 회원 가입
import { instance } from './index';
// 회원가입 api
function registerUser(userData) {
	return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
