<template>
    <div>
        <div class="top">welcome</div>
        <el-button @click="notity" type="primary">通知</el-button>
    </div>
</template>

<script lang="ts" setup>
    import WujieVue from 'wujie-vue3';
    const { bus } = WujieVue;
    const notity = () => {
        bus.$emit('mainNotity', '主应用传递的值');
    };
</script>

<style lang="scss" scoped>
    .top {
        margin-bottom: 40px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
        background-color: $primary-color;
    }
</style>
