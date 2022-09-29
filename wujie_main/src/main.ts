import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import WujieVue from 'wujie-vue3';
import hostMap from './hostMap';
import lifecycles from './lifecycle';

const { setupApp, preloadApp, bus } = WujieVue;
createApp(App).use(WujieVue).use(router).mount('#app');

/**
 * 配置应用，主要是设置默认配置
 * preloadApp、startApp的配置会基于这个配置做覆盖
 */

// const props = {
//     jump: (name) => {
//         router.push({ name });
//     },
// };

setupApp({
    name: 'vue',
    url: hostMap('//localhost:7500/'),
    exec: true,
    // props,
    ...lifecycles,
});

setupApp({
    name: 'react',
    url: hostMap('//localhost:7501/'),
    exec: true,
    // props,
    alive: true,
    ...lifecycles,
});

/**预加载(空闲时才会加载) */
if (true) {
    preloadApp({
        name: 'vue',
        url: '',
    });
    preloadApp({
        name: 'react',
        url: '',
    });
}
