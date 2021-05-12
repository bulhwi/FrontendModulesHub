import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm';

describe('LoginForm.vue', () => {
	test('ID는 이메일 형식아니면 경고 메시지가 출력된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: 'testName',
				};
			},
		});
		const warningText = wrapper.find('.warning');
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: '',
					password: '',
				};
			},
		});
		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
