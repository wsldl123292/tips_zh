<template>
    <div class="loading-page" v-if="loading">
        <p>...</p>
    </div>
</template>

<script>
export default {
    name: 'loading',
    components: {},
    data() {
        return {
            loading: false
        };
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            setTimeout(() => {
                this.loading = false;
            }, 200);
        },
        fail() {
            this.loading = false;
        }
    }
};
</script>

<style lang="less" scoped>
.loading-page {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #0088cc;
    }
}
</style>
