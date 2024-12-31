<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Web Development Tech Stack</h1>
    <h2 class="text-xl font-semibold mb-2">Frontend</h2>
    <ul class="list-disc list-inside mb-4">
      <li class="flex items-center mb-2">
        <img src="https://vuejs.org/images/logo.png" alt="Vue.js" class="w-5 h-5 mr-2" />
        Vue.js - 사용자 인터페이스를 구축하기 위한 점진적 프레임워크
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
          class="w-5 h-5 mr-2"
        />
        React - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://angular.io/assets/images/logos/angular/angular.svg"
          alt="Angular"
          class="w-5 h-5 mr-2"
        />
        Angular - 동적 웹 애플리케이션을 만들기 위한 플랫폼
      </li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">Backend</h2>
    <ul class="list-disc list-inside mb-4">
      <li class="flex items-center mb-2">
        <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" class="w-5 h-5 mr-2" />
        Node.js - 서버 사이드 및 네트워크 애플리케이션을 위한 자바스크립트 런타임
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://static.djangoproject.com/img/logos/django-logo-negative.png"
          alt="Django"
          class="w-5 h-5 mr-2"
        />
        Django - 파이썬으로 작성된 고수준의 웹 프레임워크
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://rubyonrails.org/images/rails-logo.svg"
          alt="Ruby on Rails"
          class="w-5 h-5 mr-2"
        />
        Ruby on Rails - 루비 프로그래밍 언어를 사용하는 서버 사이드 웹 애플리케이션 프레임워크
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://spring.io/images/icon-spring-boot.svg"
          alt="Spring Boot"
          class="w-5 h-5 mr-2"
        />
        Spring Boot - 스프링 프레임워크를 기반으로 한 자바 기반의 애플리케이션 프레임워크
      </li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">Infrastructure</h2>
    <ul class="list-disc list-inside">
      <li class="flex items-center mb-2">
        <img
          src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
          alt="AWS"
          class="w-5 h-5 mr-2"
        />
        AWS - 아마존 웹 서비스, 클라우드 컴퓨팅 플랫폼
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"
          alt="Docker"
          class="w-5 h-5 mr-2"
        />
        Docker - 컨테이너 기반의 오픈 소스 플랫폼
      </li>
      <li class="flex items-center mb-2">
        <img
          src="https://kubernetes.io/images/kubernetes-horizontal-color.png"
          alt="Kubernetes"
          class="w-5 h-5 mr-2"
        />
        Kubernetes - 컨테이너화된 애플리케이션의 배포, 확장 및 관리를 자동화하는 오픈 소스 시스템
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
</script>
