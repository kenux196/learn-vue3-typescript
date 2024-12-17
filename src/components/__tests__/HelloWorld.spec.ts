import { describe, it, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});

describe('describe는 여러 테스트를 그룹으로 묶는 역할', () => {
  test('테스트 내용을 적는다.', () => {
    expect('test'.length).toBe(4);
  });
  it('split을 이용한 문자열 분리', () => {
    expect('hello unit test'.split(' ').length).toBe(3);
  });
});
