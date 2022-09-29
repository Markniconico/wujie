import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './router/index';
import './style.css';
import App from './App.vue';

declare global {
    interface Window {
        // 是否存在无界
        __POWERED_BY_WUJIE__?: boolean;
        // 子应用mount函数
        __WUJIE_MOUNT: () => void;
        // 子应用unmount函数
        __WUJIE_UNMOUNT: () => void;
        // 子应用无界实例
        __WUJIE: { mount: () => void };
        $wujie: any;
    }
}

if (window.__POWERED_BY_WUJIE__) {
    let instance: any;
    window.__WUJIE_MOUNT = () => {
        const router = createRouter({ history: createWebHashHistory(), routes });
        instance = createApp(App).use(router);
        instance.mount('#app');
    };
    window.__WUJIE_UNMOUNT = () => {
        instance.unmount();
    };
    // module脚本异步加载，应用主动调用生命周期
    window.__WUJIE.mount();
} else {
    createApp(App)
        .use(createRouter({ history: createWebHashHistory(), routes }))
        .mount('#app');
}
