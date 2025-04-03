// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Main.vue';
import Test from '../components/Test.vue';

// 路由配置
const routes = [
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: Home },
    { path: '/Test', component: Test }
];

// 创建 Vue Router 实例
const router = createRouter({
    history: createWebHistory(),  // 使用 HTML5 History 模式
    routes,  // 配置路由规则
});

export default router;
