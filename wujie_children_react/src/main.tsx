import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

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


window.$wujie?.bus.$on("mainNotity", function (value:any) {
        console.log('react接收到通知!值为：' + value);
    });
