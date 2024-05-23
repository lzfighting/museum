<template>
  <div class="panorama">
    <backView :backType="1" path="/" @back="back"></backView>
    <img class="back" src="@/assets/back_shi.png" alt="">
    <div class="cultural">
      <div class="dynasty">
        <div class="dynasty-item" v-for="(item, index) in dynastyList" :key="index" @click="selectDynasty(item, index)">
            <img :class="`${item.class}${index}`" v-show="currentIndex === index" :src="item.selectImg" alt="">
            <img :class="item.class"  v-show="currentIndex !== index" :src="item.textImg" alt="">
        </div>
      </div>
      <div class="secondary">
        <div class="secondary-box">
          <div class="secondary-item" v-for="(item, index) in secondaryList" :key="index" @click="selectSecond(item, index)" :class="{curentSecondIndex: curentSecondIndex === index}">
            <p>{{item.name}}</p>
            <p class="time" v-if="item.time !== ''">{{item.time}}</p>
          </div>
        </div>
      </div>
      <div class="timeLine-box" ref="scrollContainer" >
        <div class="timeLine">
          <div class="line-top">
            <div class="item" v-for="(item, index) in lineTopList" :class="`wenwu${index+1}`" :key="index" @click="selectItem(item)"></div>
          </div>
          <div class="line-bottom">
            <div class="item" v-for="(item, index) in bottomList" :class="`wenwu${index+1}`" :key="index"  @click="selectItem(item)"></div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>
<script>
export default {
    name:'panorama-view',
  data() {
    return {
        currentIndex:0,
        curentSecondIndex:0,
        dynastyList:[
            {
              id:'shiqizhou',
              textImg:require('@/assets/shiqi_zhou_n.png'),
              selectImg:require('@/assets/shiqi_zhou.png'),
              class:'shiqizhou',
              secondaryList:[
                {
                  name:'旧石器时代',
                  time:'约三百万年前-公元前一万年',
                  scrollLeft:0,
                },
                {
                  name:'新时期时代',
                  time:'公元前10000-公元前2000',
                  scrollLeft:100,
                },
                {
                  name:'商',
                  time:'公元前1600-公元前1046',
                  scrollLeft:200,
                },
                {
                  name:'周',
                  time:'公元前1046-公元前771',
                  scrollLeft:600,
                }
              ]
            },
            {
              id:'chunqiu',
              textImg:require('@/assets/chunqiu_qin_n.png'),
              selectImg:require('@/assets/chunqiu_qin.png'),
              class:'chunqiu',
              secondaryList:[
                {
                  name:'春秋',
                  time:'公元前770-公元前476',
                  scrollLeft:1000,
                },
                {
                  name:'战国',
                  time:'公元前475-公元前221',
                  scrollLeft:1100,
                },
                {
                  name:'秦',
                  time:'公元前221-公元前206',
                  scrollLeft:1300,
                }
              ]
            },
            {
                id:'nanbei',
                textImg:require('@/assets/han_nanbeichao_n.png'),
                selectImg:require('@/assets/han_nanbeichao.png'),
                class:'nanbei',
                secondaryList:[
                  {
                    name:'西汉',
                    time:'公元前206-公元25',
                    scrollLeft:1500,
                  },
                  {
                    name:'东汉',
                    time:'公元25-公元220',
                    scrollLeft:2000,
                  },
                  {
                    name:'三国-吴',
                    time:'公元222-公元280',
                    scrollLeft:2300,
                  },
                  {
                    name:'北魏',
                    time:'公元386-公元534',
                    scrollLeft:2400,
                  },
                  {
                    name:'北齐',
                    time:'公元550-公元577',
                    scrollLeft:2500,
                  }
                ]
            },
            {
                id:'suisong',
                textImg:require('@/assets/sui_song_n.png'),
                selectImg:require('@/assets/sui_song.png'),
                class:'suisong',
                secondaryList:[
                  {
                    name:'隋',
                    time:'公元581-公元618',
                    scrollLeft:2800,
                  },
                  {
                    name:'唐',
                    time:'公元618-公元907',
                    scrollLeft:3100,
                  },
                  {
                    name:'五代南唐',
                    time:'公元937-公元975',
                    scrollLeft:3800,
                  },
                  {
                    name:'宋',
                    time:'公元960-公元1279',
                    scrollLeft:3900,
                  },
                  {
                    name:'辽',
                    time:'公元907-公元1125',
                    scrollLeft:4600,
                    
                  },
                  {
                    name:'西夏',
                    time:'公元1038-公元1227',
                    scrollLeft:4700,
                  }
                ]
            },
            {
                id:'yuanqing',
                textImg:require('@/assets/yuan_qing_n.png'),
                selectImg:require('@/assets/yuan_qing.png'),
                class:'yuanqing',
                secondaryList:[
                  {
                    name:'元',
                    time:'公元1271-公元1368',
                    scrollLeft:4800,
                  },
                  {
                    name:'明',
                    time:'公元1368-公元1644',
                    scrollLeft:5200,
                  },
                  {
                    name:'清',
                    time:'公元1636-公元1912',
                    scrollLeft:5600,
                  }
                ]
            }
        ],
        secondaryList:[],
        lineTopList:[
          {
            name:'tougaigu',
            src:'http://bwqztest.newdi.com/#/class/MTZhY18yMDIwMDkwOTA1NTI1MTYwNA'
          },
          {
            name:'renmian',
            src:'http://bwqztest.newdi.com/#/class/MjU4MV8yMDIxMDgxNzAyMDkyMDQ5Nw'
          }, 
          {
            name:'yulong',
            src:'http://bwqztest.newdi.com/#/class/MDRiNl8yMDIwMDkwOTA1NTI1MTg5NQ'
          },
          {
            name:'simu',
            src:'http://bwqztest.newdi.com/#/class/MjJsZV8yMDIwMDcyODA1MTYwNzE5NQ'
          }, {
            name:'qingtong',
            src:'http://bwqztest.newdi.com/#/class/MTcwZV8yMDIwMDkwOTA1NTI1MTkzOQ'
          },
          {
            name:'jizibaipan',
            src:'http://bwqztest.newdi.com/#/class/MDY1OF8yMDIyMDExNzA2MzkzMjUyNw'
          }, {
            name:'yuewanggoujian',
            src:'http://bwqztest.newdi.com/#/class/MDVlOV8yMDIwMDkwOTA1NTI1MTk4Mg'
          },
          {
            name:'zhanwenhu',
            src:'http://bwqztest.newdi.com/#/class/MTJrMl8yMDIwMDMyODA5MTMxMDY2MA'
          }, {
            name:'yanglinghufu',
            src:'http://bwqztest.newdi.com/#/class/MjNral8yMDIwMDcyODA1MTYwNzAxMg'
          },
          {
            name:'boshanlv',
            src:'http://bwqztest.newdi.com/#/class/MTRkZ18yMDIwMDMyODA5MTMxMDY2NA'
          }, {
            name:'zajiyong',
            src:'http://bwqztest.newdi.com/#/class/MjVlZl8yMDIxMTAxODAyMDMyNjQ5Ng'
          },
          {
            name:'tongbenma',
            src:'http://bwqztest.newdi.com/#/class/MTQya18yMDIwMDMyNzA1NDE1OTE1Mw'
          }, {
            name:'jinhubo',
            src:'http://bwqztest.newdi.com/#/class/MjZhZF8yMDIwMDkwOTA1NTI1MjA2OQ'
          },
          {
            name:'huaxiangzhuan',
            src:'http://bwqztest.newdi.com/#/class/MTVrZ18yMDIwMDkwOTA1NTI1MjExMw'
          }, {
            name:'taoyuanluo',
            src:'http://bwqztest.newdi.com/#/class/MTZpZ18yMDIxMTEzMDAyMjAwOTQ0Mg'
          },
          {
            name:'taoniuche',
            src:'http://bwqztest.newdi.com/#/class/MDVmNl8yMDIwMDkwOTA1NTI1MjA0Nw'
          }, {
            name:'jishouhu',
            src:'http://bwqztest.newdi.com/#/class/MjYxOF8yMDIwMDkwOTA1NTI1MjE1Nw'
          },
          {
            name:'buniantu',
            src:'http://bwqztest.newdi.com/#/class/MjVsOV8yMDIwMDIxMjAzMjk0NDQ5Ng'
          }, {
            name:'zhaolingliujun',
            src:'http://bwqztest.newdi.com/#/class/MTNhNV8yMDIwMDQwMTExMjIxNzQ0Nw'
          },
          {
            name:'lantingxu',
            src:'http://bwqztest.newdi.com/#/class/MjVmY18yMDIwMDQxNzA0MDYxMTU1NA'
          }, {
            name:'wumajie',
            src:'http://bwqztest.newdi.com/#/class/MjhpOV8yMDIxMTEyNjAzMzgyMjgwNA'
          },
          {
            name:'huaniaoren',
            src:'http://bwqztest.newdi.com/#/class/MjYzOV8yMDIwMDkwOTA1NTI1MzE0Nw'
          }, {
            name:'meiguizi',
            src:'http://bwqztest.newdi.com/#/class/MTdkOF8yMDIwMDkwOTA1NTI1MzE2OQ'
          },
          {
            name:'jinanliujia',
            src:'http://bwqztest.newdi.com/#/class/MDUzNl8yMDIwMDkwOTA1NTI1MjEzNg'
          }, {
            name:'zuqiu',
            src:'http://bwqztest.newdi.com/#/class/MTY1N18yMDIwMDkwOTA1NTI1MzE5Mg'
          },
          {
            name:'yingxian',
            src:'http://bwqztest.newdi.com/#/class/MjZnaV8yMDIxMTEwOTEyMzkwMDgyMQ'
          }, {
            name:'tonghudilou',
            src:'http://bwqztest.newdi.com/#/class/MTQwa18yMDIzMDIyNDAzNTg1NTY4Ng'
          }, {
            name:'渎山大玉海',
            src:'http://bwqztest.newdi.com/#/class/MjRmN18yMDIwMDMyODA5MTUxNzgyMw'
          }, {
            name:'天坛祈年殿',
            src:'http://bwqztest.newdi.com/#/class/MDM1M18yMDIyMDEyMTExMjE0NDMxNQ'
          }, {
            name:'红素罗绣平金龙百子花卉方领女夹衣',
            src:'http://bwqztest.newdi.com/#/class/MjRiaF8yMDIxMDgwMjExMjkxNDI2MA'
          }, {
            name:'乾隆南巡图',
            src:'http://bwqztest.newdi.com/#/class/MjY0M18yMDIwMTEwMzAyMDQ0ODcxNQ'
          }, {
            name:'胤禛耕织图',
            src:'http://bwqztest.newdi.com/#/class/yzgzt'
          },
          {
            name:'郑成功弈棋图',
            src:'http://bwqztest.newdi.com/#/class/MDgyZ18yMDIxMTEyNjAyMzc0Mzg2NA'
          },
        ],
        bottomList:[
          {
            name:'小口尖底瓶',
            src:'http://bwqztest.newdi.com/#/class/MjQ5OF8yMDIwMDkwOTA1NTI1MTg1MA'
          },
          {
            name:'舞蹈纹彩陶盆',
            src:'http://bwqztest.newdi.com/#/class/MTY3Y18yMDIwMDkwOTA1NTI1MTg3Mw'
          }, {
            name:'“众人协田”牛骨刻辞',
            src:'http://bwqztest.newdi.com/#/class/MjYxN18yMDIwMDkwOTA1NTI1MTkxNw'
          },  {
            name:'太阳神鸟金饰',
            src:'http://bwqztest.newdi.com/#/class/MTRiZl8yMDIwMDkwOTA1NTI1MTk2MA'
          },
          {
            name:'四羊方尊',
            src:'http://bwqztest.newdi.com/#/class/MjdiZF8yMDIxMTAxODAyMDMyNjIyOQ'
          }, {
            name:'大盂鼎',
            src:'http://bwqztest.newdi.com/#/class/MTY3MF8yMDIxMTAxODAyMDMyNjUxNw'
          },  {
            name:'彩绘陶乐舞杂技俑',
            src:'http://bwqztest.newdi.com/#/class/MjVlZl8yMDIxMTAxODAyMDMyNjQ5Ng'
          },
          {
            name:'鄂君启节',
            src:'http://bwqztest.newdi.com/#/class/MjY5Nl8yMDIwMDkwOTA1NTI1MjAwNA'
          }, {
            name:'跪射俑',
            src:'http://bwqztest.newdi.com/#/class/MDRoYV8yMDIyMDgyMjAzMzQ1MzM5NQ'
          },  {
            name:'素纱襌衣',
            src:'http://bwqztest.newdi.com/#/class/MTUwZ18yMDIwMDkwOTA1NTI1MjAyNg'
          },
          {
            name:'长信宫灯',
            src:'http://bwqztest.newdi.com/#/class/MDM3MV8yMDIwMDMyNzA1NDE1OTE3Ng'
          }, {
            name:'金缕玉衣',
            src:'http://bwqztest.newdi.com/#/class/MTNjaF8yMDIwMDgxMzEyNTIxOTYxMg'
          },  {
            name:'击鼓说唱陶俑',
            src:'http://bwqztest.newdi.com/#/class/MDNnYV8yMDIwMDgxMzEyNTIxOTU3Nw'
          },
          {
            name:'陶船',
            src:'http://bwqztest.newdi.com/#/class/MjUxOF8yMDIwMDkwOTA1NTI1MjA5MQ'
          }, {
            name:'九色鹿本生壁画',
            src:'http://bwqztest.newdi.com/#/class/MTRhYV8yMDIwMDcyODA1MTYyNzAxMw'
          },  {
            name:'陶碾、陶磨和劳作女俑',
            src:'http://bwqztest.newdi.com/#/class/MDgwMF8yMDIxMTEzMDAyMjAwOTUyOA'
          },
          {
            name:'蒲津渡铁牛',
            src:'http://bwqztest.newdi.com/#/class/MDU1N18yMDIwMDkwOTA1NTI1MzEyNg'
          }, {
            name:'十二生肖陶俑',
            src:'http://bwqztest.newdi.com/#/class/MDY5ZF8yMDIwMDkwOTA1NTI1MjQwOA'
          },  {
            name:'三彩骆驼载乐俑',
            src:'http://bwqztest.newdi.com/#/class/MDhoNV8yMDIxMTEyNjAzMzgyMjc4NA'
          },
          {
            name:'法门寺银茶具',
            src:'http://bwqztest.newdi.com/#/class/MTcwZ18yMDIyMDEyNTExNDEyMDc3Nw'
          }, {
            name:'韩熙载夜宴图',
            src:'http://bwqztest.newdi.com/#/class/MDVnN18yMDIwMDIxMjAzMzkxMDA1MA'
          },
          {
            name:'千里江山图',
            src:'http://bwqztest.newdi.com/#/class/MDdmOF8yMDIwMDIxMjAzNDA0MjcxMg'
          }, {
            name:'定窑白瓷孩儿枕',
            src:'http://bwqztest.newdi.com/#/class/MTczMF8yMDIxMTIxNDA3MjAzNDkyMA'
          }, {
            name:'清明上河图',
            src:'http://bwqztest.newdi.com/#/class/MDY0Y18yMDIwMDIxMjAzMjUwMjg0MQ'
          }, {
            name:'琉璃鸱吻',
            src:'http://bwqztest.newdi.com/#/class/MGEwaF8yMDIxMTIxNDA3MjAzNTI0OA'
          }, {
            name:'萧何月下追韩信梅瓶',
            src:'http://bwqztest.newdi.com/#/class/MDJqN18yMDIwMDMyNzA1NDE1OTE3NQ'
          }, {
            name:'“大行散乐忠都秀在此作场”杂剧演出图',
            src:'http://bwqztest.newdi.com/#/class/MjkzYV8yMDIxMTIxNDA3MjAzNTI5Nw'
          },
          {
            name:'斗彩鸡缸杯',
            src:'http://bwqztest.newdi.com/#/class/MDgzZ18yMDIwMDkwOTA1NTI1MzIxNA'
          }, {
            name:'一团和气图',
            src:'http://bwqztest.newdi.com/#/class/MDRhaV8yMDIwMDMyNjExMzI0NzU3MQ'
          }, {
            name:'文渊阁《四库全书》',
            src:'http://bwqztest.newdi.com/#/class/MDgza18yMDIwMDkwOTA1NTI1MzcyNA'
          }, {
            name:'粉彩海宴河清尊',
            src:'http://bwqztest.newdi.com/#/class/MDk0MV8yMDIxMTIxNDA3MjAzNTI3Mg'
          }
        ]
    }
  },

  activated() {
    if(sessionStorage.getItem('timeLineLeft')) {
      this.$refs.scrollContainer.scroll({
        left: sessionStorage.getItem('timeLineLeft'),
        behavior: 'auto'
    });
    }
  },

  mounted() {
    this.secondaryList = this.dynastyList[0].secondaryList
  },
  methods: {
    back(){
      sessionStorage.removeItem('timeLineLeft')
      this.currentIndex = 0
      this.curentSecondIndex = 0
    },
    scrollTo(x) {
      this.$refs.scrollContainer.scroll({
        left: x,
        behavior: 'smooth'
      });
    },

    selectDynasty(item, index){
      this.showSecond= true
      this.secondaryList = item.secondaryList
      this.currentIndex = index
      this.curentSecondIndex = 0
      this.scrollTo(item.secondaryList[0].scrollLeft)
    },
    selectSecond(item, index){
      this.curentSecondIndex = index
      this.scrollTo(item.scrollLeft)
    },
    selectItem(item){
      sessionStorage.setItem('timeLineLeft', this.$refs.scrollContainer.scrollLeft )
      if(item.src === '') return
        this.$router.push({
            path: '/iframe',
            query:{
                url:item.src,
                path:'/panorama',
                type:this.type
            }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.panorama{
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/bg1.png');
  background-size: 100% 100%;
  .cultural{
    display: flex;
    .dynasty{
      width: 102px;
      height: 100vh;
      background-image: url('@/assets/di_02.png');
      background-size: 100% 100%;
      padding-top: 401px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .dynasty-item{
          border-top: 1px solid #344d80;
          border-bottom: 1px solid #344d80;
          height: 170px;
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          .shiqizhou{
            width: 48px;
            height: 75px;
          }
          .shiqizhou0{
            width: 94px;
            height: 111px;
          }
          .chunqiu{
            width: 48px;
            height: 75px;
          }
          .chunqiu1{
            width: 94px;
            height: 111px;
          }
          .nanbei{
            width: 72px;
            height: 74px;
          }
          .nanbei2{
            width: 113px;
            height: 100px;
          }
          .suisong{
            width: 24px;
            height: 75px;
          }
          .yuanqing{
            width: 24px;
            height: 74px;
          }
          .jindai{
            width: 24px;
            height: 55px;
          }
          .suisong3,.yuanqing4{
            width: 80px;
            height: 111px;
          }
          .jindai5{
            width: 80px;
            height: 101px;
          }
          
      }
    }
    .secondary{
      width: 278px;
      height: 100vh;
      background-image: url('@/assets/di_01.png');
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      position: relative;
      .secondary-box{
        margin: auto;
        div{
          font-family: "Square-font";
          margin-bottom: 18px;
          width: 260px;
          height: 111px;
          font-size: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #588ad9;
          background-color: rgba(88,138,217,0.1);
          .time{
            font-size: 20px;
          }
        }
        .curentSecondIndex{
          color: #e28a7b;
          text-shadow:  0px 4px 40px 
                rgba(238, 91, 51, 0.52),
                0px 2px 20px 
                rgba(238, 91, 51, 0.52)
        }
      }
      .shouqi{
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0px;
      }
    }
    .timeLine-box{
      width: calc(100vw - 300px);
      height: 100vh;
      overflow-x: scroll;
      .timeLine{
        width: 18843px;
        height: 1800px;
        background-image: url('@/assets/时间轴全图.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .line-top{
          width: 100%;
          height: 900px;
          box-sizing: border-box;
          padding-top: 140px;
          padding-left: 160px;
          display: flex;
          div{
            width: 400px;
            height: 700px;
            margin-right: 80px;
          }
          .wenwu3{
            margin-right: 140px !important;
          }
          .wenwu5{
            margin-right: 370px;
          }
          .wenwu6{
            margin-right: 210px;
          }
          .wenwu9{
            margin-right: 210px;
          }
          .wenwu12{
            margin-right: 210px;
          }
          .wenwu15{
            margin-right: 320px
          }
          .wenwu16{
            margin-right: 170px;
          }
          .wenwu22{
            margin-right: 460px
          }
          .wenwu25{
            margin-right: 190px;
          }
          .wenwu26{
            margin-right: 326px;
          }
          .wenwu28{
            margin-right: 260px
          }
          .wenwu30{
            margin-right: 320px;
          }
        }
        .line-bottom{
          width: 100%;
          height: 900px;
          box-sizing: border-box;
          padding-top: 120px;
          padding-left: 440px;
          display: flex;

          div{
            width: 400px;
            height: 700px;
            margin-right: 80px;
          }
          .wenwu4{
            margin-right: 60px;
          }
          .wenwu6{
            margin-right: 50px
          }
          .wenwu7{
            margin-right: 180px;
          }
          .wenwu8{
            margin-right: 320px
          }
          .wenwu9{
            margin-right: 250px
          }
          .wenwu12{
            margin-right: 250px;
          }
          .wenwu14{
            margin-right: 300px;
          }
          .wenwu15{
            margin-right: 360px;
          }
          .wenwu16{
            margin-right: 450px;
          }
          .wenwu18{
            margin-right: 50px
          }
          .wenwu20{
            margin-right: 300px;
          }
          .wenwu21{
            margin-right: 330px;
          }
          .wenwu24{
            margin-right: 250px;
          }
          .wenwu25{
            margin-right: 180px;
          }
          .wenwu27{
            margin-right: 320px
          }
          .wenwu29{
            margin-right: 330px
          }
        }
      }
    }
  }

  .back{
    position: absolute;
    width: 451px;
    height: 110px;
  }
}
</style>
