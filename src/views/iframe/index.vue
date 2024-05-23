<template>
  <div class="iframe">
    <backView :backType="1" :path="path"></backView>
    <img class="back" src="@/assets/back_bo.png" alt="">
    <iframe id="myIframe" :src="url" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
    name:'iframe-view',
    data() {
        return {
            url:'',
            path:''
        }
    },
    mounted() {
        this.url = this.$route.query.url
        this.path = this.$route.query.path
    },
    methods: {
    }
}
</script>
<style scoped lang="scss">
.back{
    width: 210px;
    height: 110px;
    position: fixed;
    z-index: 99;
    top: 0px;
}
.iframe{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 135px;
    background-image: url('@/assets/bg1.png');
    background-size: 100% 100%;
    overflow: hidden;
    iframe{
        width: 100%;
        height: calc(100vh - 165px);
    }
}
</style>
