<template>
    <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
    <WujieVue
        width="100%"
        height="100%"
        name="react"
        :url="viteUrl"
        :sync="true"
        :props="{ jump }"
    ></WujieVue>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import hostMap from '../hostMap';
    let viteUrl = hostMap('//localhost:7501/');

    const router = useRouter();
    const jump = (location) => {
        router.push(location);
    };
</script>

<style lang="scss" scoped></style>
