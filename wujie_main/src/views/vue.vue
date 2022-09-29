<template>
    <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
    <WujieVue width="100%" height="100%" name="vue" :url="viteUrl" :sync="true"></WujieVue>
</template>

<script setup lang="ts">
    import hostMap from '../hostMap';

    let viteUrl = hostMap('//localhost:7500/');
</script>

<style lang="scss" scoped></style>
