import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
//A:自定义公共指令之——注入
import installDirectives from './directives'

const routes = [
    { 
        path: '/',
        component: ()=>import('../src/components/home-page.vue'),
        redirect:'/home'//设置默认路由，作为默认展示的首页
    },
    { 
        path: '/home',
        component: ()=>import('../src/components/home-page.vue'),
        name: 'home'
    },
    { 
        path: '/demoA',
        component: ()=>import('../src/components/demo-use-A.vue'),
        name: 'demoA'
    },
    { 
        path: '/demoB',
        component: ()=>import('../src/components/demo-use-B.vue'),
        name: 'demoB'
    },
    { 
        path: '/demoC',
        component: ()=>import('../src/components/demo-use-C.vue'),
        name: 'demoC'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// // 自定义全局指令函数
// const customDirective = {
//     // 当被绑定的元素挂载到 DOM 上时调用
//     mounted(el, binding) {
//       el.addEventListener('click', () => {
//         alert(binding.value.message);
//       });
//     }
// };

// //自定义全局指令函数2
// const autoFocus = {
//     // 当被绑定的元素挂载到 DOM 上时调用
//     mounted(el) {
//         el.focus();
//     }
// }

const app = createApp(App);
app.use(router)

// app.directive('alertvalue', customDirective)
// app.directive('autofocus', autoFocus)
/**
 * 使用use调用install方法，然后把多个全局方法注册到全局
 * 用来把上面写到的代码提取到一个文件夹里
 */
app.use(installDirectives)//A:自定义公共指令之——注入

app.mount('#app')
