<template>
  <div class="container">
    <van-image-preview v-model="show" :showIndex="false" swipeDuration="0"  @close="handleClose"  :images="images">
        <template v-slot:cover>
          <backView :backType="0"></backView>
            <img class="back" src="@/assets/guan_back.png" alt="">
        </template>
    </van-image-preview>
  </div>
</template>
 
<script>
import Vue from 'vue';
import { ImagePreview } from 'vant';

// 全局注册
Vue.use(ImagePreview);
export default {
  name: 'exhibition-view',
  data() {
    return {
      show:true,
      images:[require('@/assets/map.jpg')],
      start: { x: 0, y: 0 },
      end: { x: 0, y: 0 },
      dragging: false,
      scale: 1,
      maxScale: 2, // 最大缩放比例
    };
  },
  mounted(){},
  methods: {
    handleClose() {
      this.show = true
      // 阻止关闭预览操作
    }
  },
};
</script>
 
<style>
.container {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/bg1.png');
  background-size: 100% 100%;
}
.button-box{
  /* position: absolute; */
  margin-left: 160px;
  margin-top: calc(100vh - 560px);
  bottom: 0px;
  width: 2544px;
  height: 193px;
  z-index: 999999;

}
.back{
  width: 421px;
  height: 131px;
}
</style>