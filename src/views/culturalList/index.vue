<template>
    <div class="cultura-list">
        <backView :backType="1" :path="path"></backView>
        <div class="back">
            <img src="@/assets/backIcon.png" alt="">
            <img v-show="type === 'guojia'" src="@/assets/logo_guojiabowuguan.png" alt="">
            <img v-show="type === 'gugong'" src="@/assets/logo_gugong.png" alt="">
            <img v-show="type === 'jinsha'" src="@/assets/logo_jinshayizhi.png" alt="">
        </div>
        <div class="list-box">
            <template v-if="type ==='gugong'">
                <img :src="item.img" v-for="(item, index) in gogongList" :key="index" alt="" @click="open(item)">
            </template>
            <template v-if="type ==='guojia'">
                <img :src="item.img" v-for="(item, index) in guojiaList" :key="index" alt="" @click="open(item)">
            </template>
            <template v-if="type ==='jinsha'">
                <img :src="item.img" v-for="(item, index) in jinshaList" :key="index" alt="" @click="open(item)">
            </template>
        </div>
        <!-- <div class="classLabelBox">
            <div v-for="(item,index) in classLabelList" :key="index"> {{item.label}}</div>
        </div> -->
    </div>
</template>

<script>
export default {
    name:'culturaList',
    data () {
        return {
            path:'/sky',
            currentId:'33',
            classLabelList:[
                {
                    id:'0',
                    label:'全部'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                },
                {
                    id:'asd',
                    label:'通史'
                }
            ],
            culturlList:[
                {
                    id:'33',
                    list:[
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                        require('@/assets/cultualList/cultur.png'),
                    ]
                }
            ],
            type:'',
            currentImgList:[],
            gogongList:[
                {
                    img:require('@/assets/gugong/buniantu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjVsOV8yMDIwMDIxMjAzMjk0NDQ5Ng'
                },
                {
                    img:require('@/assets/gugong/lantingxu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjVmY18yMDIwMDQxNzA0MDYxMTU1NA'
                },
                {
                    img:require('@/assets/gugong/dingyaobaicihaierzhen.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTczMF8yMDIxMTIxNDA3MjAzNDkyMA',
                },
                {
                    img:require('@/assets/gugong/hanxizaiyeyantu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDVnN18yMDIwMDIxMjAzMzkxMDA1MA'
                },
                {
                    img:require('@/assets/gugong/qianlijiangshantu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDdmOF8yMDIwMDIxMjAzNDA0MjcxMg'
                },
                {
                    img:require('@/assets/gugong/qianlongnanxuntu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjY0M18yMDIwMTEwMzAyMDQ0ODcxNQ'
                },
                {
                    img:require('@/assets/gugong/qingmingshanghetu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDY0Y18yMDIwMDIxMjAzMjUwMjg0MQ'
                },
                {
                    img:require('@/assets/gugong/yinzhengengzhitu.png'),
                    url:'http://bwqztest.newdi.com/#/class/yzgzt'
                },
                {
                    img:require('@/assets/gugong/yituanheqitu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDRhaV8yMDIwMDMyNjExMzI0NzU3MQ'
                },
            ],
            guojiaList:[
                {
                    img:require('@/assets/guojia/dayuding.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTY3MF8yMDIxMTAxODAyMDMyNjUxNw'
                },
                {
                    img:require('@/assets/guojia/ejunqijie.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjY5Nl8yMDIwMDkwOTA1NTI1MjAwNA'
                },
                {
                    img:require('@/assets/guojia/huaniaorenwuluodianjing.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjYzOV8yMDIwMDkwOTA1NTI1MzE0Nw'
                },
                {
                    img:require('@/assets/guojia/jiguhsuochangyong.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDNnYV8yMDIwMDgxMzEyNTIxOTU3Nw'
                },
                {
                    img:require('@/assets/guojia/jinlvyuyi.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTNjaF8yMDIwMDgxMzEyNTIxOTYxMg'
                },
                {
                    img:require('@/assets/guojia/liuyichiwen.png'),
                    url:'http://bwqztest.newdi.com/#/class/MGEwaF8yMDIxMTIxNDA3MjAzNTI0OA'
                },
                {
                    img:require('@/assets/guojia/renmianwenyucong.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjU4MV8yMDIxMDgxNzAyMDkyMDQ5Nw'
                },
                {
                    img:require('@/assets/guojia/simuwuding.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjJsZV8yMDIwMDcyODA1MTYwNzE5NQ'
                },
                {
                    img:require('@/assets/guojia/siyangfangzun.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjdiZF8yMDIxMTAxODAyMDMyNjIyOQ'
                },
                {
                    img:require('@/assets/guojia/tonghudilou.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTQwa18yMDIzMDIyNDAzNTg1NTY4Ng'
                },
                {
                    img:require('@/assets/guojia/xiaokoujiandiping.png'),
                    url:'http://bwqztest.newdi.com/#/class/MjQ5OF8yMDIwMDkwOTA1NTI1MTg1MA'
                },
                {
                    img:require('@/assets/guojia/yanchanghuaxiangzhuan.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTVrZ18yMDIwMDkwOTA1NTI1MjExMw'
                },  {
                    img:require('@/assets/guojia/zhengchenggongyiqitu.png'),
                    url:'http://bwqztest.newdi.com/#/class/MDgyZ18yMDIxMTEyNjAyMzc0Mzg2NA'
                },
            ],
            jinshaList:[
                {
                    img:require('@/assets/jinsha/taiyangshenjinshi.png'),
                    url:'http://bwqztest.newdi.com/#/class/MTRiZl8yMDIwMDkwOTA1NTI1MTk2MA'
                },
                {
                    img:require('@/assets/jinsha/dajinmianju.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/juanyunwenjinlabaxingqi.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/shangzhoujinhe.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/shangzhouxiaojinmianju.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/shoumianwenyuyue.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/sijiyucong.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/waxingjinbo.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/youlingyuyabi.png'),
                    url:''
                }, {
                    img:require('@/assets/jinsha/yushenrenmianxiang.png'),
                    url:''
                }
            ]
        }
    },
    mounted(){
        this.init()
        this.type = this.$route.query.type
    },
    methods: { 
        init(){
            this.culturlList.forEach( item => {
                if(item.id === this.currentId) this.currentImgList = item.list
            })
        },
        open(item){
            if(item.url === '') return
            this.$router.push({
                path: '/iframe',
                query:{
                    url:item.url,
                    path:'/culturaList',
                    type:this.type
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.cultura-list{
    width: 100vw;
    height: 100vh;
    background-color: #000;
    background-image: url('@/assets/bg1.png');
    background-size: 100% 100%;
    overflow: hidden;
    .back{
        width: 313px;
        height: 111px;
        margin-top: 20px;
        display: flex;
        img:nth-of-type(1){
            width: 117px;
            height: 111px;
        }
        img:nth-of-type(2){
            width: 208px;
            margin-top: 10px;
            margin-left: -20px;
            height: 72px;
        }
    }
    .list-box{
        width: 2400px;
        height: 1200px;
        margin: 40px auto;
        padding-bottom: 240px;
        overflow-y: scroll;
        img{
            width: 506px;
            height: 696px;
            margin-bottom: 40px;
            margin-left:60px 
        }
    }
    .classLabelBox{
        width: 278px;
        height: 100vh;
        background-image: url('@/assets/cultualList/bg.png');
        background-size: 100% 100%;
        display: flex;
        overflow-y: scroll;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 20px 0px;

        div{
            width: 260px;
            height: 110px;
            color: #588ad9;
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(88,138,217, 0.2);
            font-weight: bold;
        }
    }
}
</style>