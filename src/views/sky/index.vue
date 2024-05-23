<template>
    <div class="sky">
        <backView :backType="1" path="/"></backView>
        <img class="back" src="@/assets/back_kong.png" alt="">
        <div class="content">
            <div class="area-list">
                <div v-for="(item,index) in list" :key="index" :class="{active:activity === index,'disabled': item.lock}" @click="selectRegion(item, index)">
                    {{item.region}}
                    <span>{{item.num}}</span>
                </div>
            </div>
            <div class="right-img">
                <img src="@/assets/bowuguan5.png" v-show="activity === 0" class="bowuguan-img" alt="">
                <img src="@/assets/sichuan01.png" v-show="activity === 1" class="sichuan" alt="">
                <div v-if="activity === 0" class="bowuguan">
                    <div @click="toFun('gugong')"></div>
                    <div @click="toFun('guojia')"></div>
                </div>
                <div v-if="activity === 1" @click="toFun('jinsha')" class="chengdu"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'sky-view',
    data () {
        return {
            activity:0,
            list:[
                {
                    region:'推荐博物馆',
                    lock:false,
                    num:24,
                }, {
                    region:'四川',
                    lock:false,
                    num:6,
                }, {
                    region:'云南',
                    lock:true,
                    num:2,
                }, {
                    region:'湖北',
                    lock:true,
                    num:2,
                }, {
                    region:'河北',
                    lock:true,
                    num:2,
                }, {
                    region:'山西',
                    lock:true,
                    num:2,
                }, {
                    region:'河南',
                    lock:true,
                    num:2,
                }, {
                    region:'陕西',
                    lock:true,
                    num:2,
                }
            ],
            rightImg:''
        }
    },
    mounted(){
        this.selectRegion(this.list[0], 0)
    },
    methods: { 
        toFun(type){
            this.$router.push({
                path:'/culturaList',
                query:{
                    type
                }
            })

        },
        selectRegion(item, index){
            if(item.lock) return
            this.activity = index
        },
        back(){
            this.$router.back()
        },
    }
}
</script>

<style scoped lang="scss">
.sky{
    width: 100vw;
    height: 100vh;
    background-color: #000;
    background-image: url('@/assets/bg1.png');
    background-size: 100% 100%;
    .back{
        width: 500px;
        position: absolute;
        height: 122px;
    }
    .content{
        display: flex;
        .area-list{
            width: 290px;
            height: 100%;
            padding-top: 259px;
            background-image: url('@/assets/list-bg.png');
            background-size: 100% 100%;
            div{
                margin: 0px auto 20px;
                background-image: url('@/assets/button02.png');
                background-size: 100% 100%;
                width: 260px;
                height: 161px;
                font-size: 30px;
                display: flex;
                align-items: center;
                color: #588ad9;
                font-weight: bold;
                justify-content: center;
                font-family: "Square-font";
                position: relative;
                span{
                    font-size: 20px;
                    color: #588ad9;
                    position: absolute;
                    right: 20px;
                    bottom: 10px;
                }
            }
            .active{
                background-image: url('@/assets/button01.png');
                color: #e28a7b;
            text-shadow:  0px 2px 40px 
                rgba(238, 91, 51, 0.52),
                0px 2px 20px 
                rgba(238, 91, 51, 0.52)
            }
            .disabled{
                background-image: url('@/assets/button03.png');
            }
        }
        .right-img{
            margin: auto;
            position: relative;
            .bowuguan-img{
                width: 2428px;
                height: 1133px;
            }
            .sichuan{
                width: 2174px;
                height: 1375px
            }
            .bowuguan{
                position: absolute;
                top: 0px;
                display: flex;
                div{
                    width: 500px;
                    height: 1200px;
                }
            }
            .chengdu{
                position: absolute;
                width: 320px;
                height: 100px;
                top: 420px;
                left: 156px;
            }
        }
    }

  
}
</style>