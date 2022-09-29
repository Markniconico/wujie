<template>
    <div class="layout_c">
        <div class="slide_bar">
            <el-menu
                background-color="#031024"
                active-text-color="#ffd04b"
                :default-active="active"
                text-color="#fff"
                router
                @select="select"
            >
                <el-menu-item index="0" route="/home">
                    <span>主应用首页</span>
                </el-menu-item>
                <el-menu-item index="1" route="/vue">
                    <span>子项目(vue)</span>
                </el-menu-item>
                <el-menu-item index="2" route="/react">
                    <span>子项目(react保活)</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right_content">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import WujieVue from 'wujie-vue3';
    const { bus } = WujieVue;

    const router = useRouter();
    const active = ref();
    router.isReady().then(() => {
        active.value = getActive();
    });

    // 主应用监听事件
    bus.$on('mainAlert', function (value: string) {
        alert(`主应用触发的alert(${value})`);
    });
    // 在 sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
    bus.$on('sub-route-change', (path) => {
        router.push({ path });
        active.value = getActive(path);
    });

    const getActive = (path = router.currentRoute.value.path) => {
        return ['/home', '/vue', '/react'].findIndex((item) => item === path);
    };

    /**解决active失效 */
    const select = (index) => {
        active.value = index;
    };
</script>

<style lang="scss" scoped>
    .layout_c {
        position: relative;
        transition: all 0.3s ease;
        display: flex;
        height: 100vh;
        overflow: hidden;
    }

    .slide_bar {
        margin-right: 10px;
        flex-shrink: 0;
        width: 180px;
        height: 100%;
        background-color: #031024;
    }

    .right_content {
        flex: 1;
    }

    .el-menu,
    .el-menu--popup {
        .el-menu-item {
            &.is-active {
                background-color: #060708;
                &::before {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 4px;
                    content: '';
                    background: #ffd04b;
                }
            }
        }
    }
</style>
