<script setup lang="ts">
    import { ref } from 'vue';

    const emitMainEvent = () => {
        window.$wujie?.bus.$emit('mainAlert', 'vue-children');
    };

    /**不是保活模式不生效 */
    window.$wujie?.bus.$on('mainNotity', function (value: any) {
        console.log('vue接收到通知!值为：' + value);
    });

    const drawer = ref(false);
    const drawer2 = ref(false);
    const direction = ref('rtl');
    const radio1 = ref('Option 1');
    const handleClose = (done: () => void) => {
        done();
    };
    function cancelClick() {
        drawer2.value = false;
    }
    function confirmClick() {
        drawer2.value = false;
    }
</script>

<template>
    <div class="block">
        <el-radio-group v-model="direction">
            <el-radio label="ltr">left to right</el-radio>
            <el-radio label="rtl">right to left</el-radio>
            <el-radio label="ttb">top to bottom</el-radio>
            <el-radio label="btt">bottom to top</el-radio>
        </el-radio-group>

        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            open
        </el-button>
        <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
            with footer
        </el-button>

        <el-drawer
            v-model="drawer"
            title="I am the title"
            :direction="direction"
            :before-close="handleClose"
        >
            <span>Hi, there!</span>
        </el-drawer>
        <el-drawer v-model="drawer2" :direction="direction">
            <template #title>
                <h4>set title by slot</h4>
            </template>
            <template #default>
                <div>
                    <el-radio v-model="radio1" label="Option 1" size="large">Option 1</el-radio>
                    <el-radio v-model="radio1" label="Option 2" size="large">Option 2</el-radio>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="cancelClick">cancel</el-button>
                    <el-button type="primary" @click="confirmClick">confirm</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
    <div class="block">
        <el-button type="danger" @click="emitMainEvent">触发主应用监听事件</el-button>
    </div>
</template>

<style scoped>
    .block {
        margin-bottom: 40px;
    }
</style>
