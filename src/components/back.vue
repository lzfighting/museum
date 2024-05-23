<template>
     <div class="back-btn" @click="back"></div>
</template>
<script>
export default {
  name:'back-com',
  props:{
    backType:{
        type:Number,
        default: 0
    },
    path:{
        type:String,
        default: ''
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    back(){
      this.$emit('back')
      if(this.backType === 0) {
        this.$router.back()
      } else {
        this.$router.replace({
            path:this.path,
            query:this.$route.query
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.back-btn{
    width: 500px;
    height: 200px;
    position: absolute;
    left: 0;
    top:0;
    z-index: 9999;
}
</style>
