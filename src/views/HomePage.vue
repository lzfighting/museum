<template>
  <div class="home">
    <img src="@/assets/home/user-msg.png" class="user-msg" alt="">
    <div class="cultural-box">
      <!--鱼隐图  -->
      <div class="picture" v-show="active === 3" @click="openWenwu(3)">
        <img class="jz_up" src="@/assets/jz_up01.png" alt="">
        <div class="jz-box">
          <div class="img img1"></div>
          <div class="img img2"></div>
        </div>
      </div>
      <div class="picture" v-show="active === 0" @click="openWenwu(0)">
        <img class="jz_up" src="@/assets/jz_up01.png" alt="">
        <div class="jz-box">
          <div class="img img1 yuyintu"></div>
          <div class="img img2 yuyintu"></div>
        </div>
      </div>
      <!-- 长信宫灯 -->
      <img v-show="active === 1" @click="openWenwu(1)" class="changxingongdeng" src="@/assets/home/changxingongdeng01.png" alt="">
      <img v-show="active === 2" @click="openWenwu(2)" class="tonghu" src="@/assets/home/tonghu03.png" alt="">
      <!-- <img v-show="active === 4" @click="openWenwu(4)" class="tonghu" src="@/assets/home/wanshanqiuse03.png" alt=""> -->
      <img v-show="active === 4" @click="openWenwu(4)" class="tonghu"  src="@/assets/home/白蹄乌.gif" alt="">
    </div>
    <div class="home-icon2">
      <div class="button1 line-btn" @click="toFun('panorama')"></div>
      <div class="button2 line-btn" @click="toFun('kong')"></div>
      <div class="btn-list">
        <div @click="toFun('bo')"></div>
        <div @click="toFun('wu')"></div>
        <div @click="toFun('guan')"></div>
      </div>
    </div>
    <div class="select-box">
        <div class="cultural-select-box">
          <div class="cultural-item" v-for="(item,index) in culturalList" :key="index" @click="onChange(index)" :style="{opacity:index > 5? '0.3': ''}" :class="[`cultural-item-${index}`, {'active':active===index}]">
            <img :src="item.img" alt="">
            <img v-show="active === index" class="border" src="@/assets/home/tx_d.png" alt="">
            <p>{{item.name}}</p>
          </div>
      </div>
    </div>
    <div class="wenwu-name-box">
      <img src="@/assets/home/xishanyuyintu02.png" v-show="active===0" class="wenwu-name" alt="">
      <img src="@/assets/home/changxingongdeng02.png" v-show="active===1" class="wenwu-name" alt="">
      <img src="@/assets/home/shuilugong02.png" v-show="active===2" class="wenwu-name" alt="">
      <img src="@/assets/home/ruihetu02.png" v-show="active===3" class="wenwu-name" alt="">
      <!-- <img src="@/assets/home/wanshanqiuse02.png" v-show="active===4" class="wenwu-name" alt=""> -->
      <img src="@/assets/home/baitiwu02.png" v-show="active===4"  class="wenwu-name" alt="">
    </div>
    <div class="cultural-num">
      <img v-show="active===0" src="@/assets/home/溪山渔隐图-数值.png" alt="">
      <img v-show="active===1" src="@/assets/home/长信宫灯-数值.png" alt="">
      <img v-show="active===2" src="@/assets/home/水陆攻战纹壶-数值.png" alt="">
      <img v-show="active===3" src="@/assets/home/瑞鹤图-数值.png" alt="">
      <img v-show="active===4" src="@/assets/home/白蹄乌.png" alt="">
    </div>
    <div class="footer">
      <div class="foot-icon">
        <span class="name">{{culturalList[active].name}}</span>
      </div>
      <van-notice-bar class="notice-bar" style="width: 100%; height: 100%; font-size: 12px;" background="#141945" color="#dafdfe" :text="culturalList[active].text"></van-notice-bar>
      <div class="foot-text">
       
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
export default {
  name: 'HomePage',
  components: {

  },
  data() {
    return {
      active: 0,
      culturalList:[
        {
          img: require('@/assets/home/tx01.png'),
          name: '溪山渔隐图',
          src:'https://chim.newdi.com/mobile_project2d/index1222.html?res=0d513a4c-b1a9-4cf8-8725-176b8449e857.chim',
          num:{
            num1:43,
            num2:11,
            num3:50,
            num4:38
          },
          text:'《溪山渔隐图》是明代画家唐寅创作的一幅绢本设色水墨画。现收藏于台北故宫博物院。画法苍古，用笔劲利，设色明艳全画清雅幽丽，神采逼人，堪称为唐寅灵腕之妙品，富有艺术价值。'
        },
        {
          img: require('@/assets/home/tx02.png'),
          name: '长信宫灯',
          src:'http://bwqztest.newdi.com/#/class/MDM3MV8yMDIwMDMyNzA1NDE1OTE3Ng',
          num:{
            num1:23,
            num2:41,
            num3:35,
            num4:23
          },
          text:'西汉长信宫灯，中国汉代青铜器，1968年于河北省满城县，中山靖王刘胜妻窦绾墓中出土。宫灯灯体为一通体鎏金、双手执灯跽坐的宫女，神态恬静优雅。灯体通高48厘米，重15.85公斤。宫女一手执灯，另一手袖似在挡风，实为虹管，用以吸收油烟，既防止了空气污染，又有审美价值。此宫灯因曾放置于窦太后（刘胜祖母）的长信宫内而得名，现藏于河北博物院。'
        },
        {
          img: require('@/assets/home/tx03.png'),
          name: '水陆攻战纹铜壶',
          src:'https://chim.newdi.com/hw/#/detail_3d/history?_id=MTJrMl8yMDIwMDMyODA5MTMxMDY2MA&_idx=1',
          num:{
            num1:48,
            num2:21,
            num3:28,
            num4:29
          },
          text:'镶嵌宴乐水陆攻战纹壶，战国早期青铜器。高40.3厘米。1965年四川成都百花潭出土。侈口，有盖，鼓腹，圈足。肩两侧有兽面环耳。整器满布红铜镶嵌的纹饰。上段有宴乐、采桑、射礼、捕鱼、弋射等场面，生动地描绘了当时的生活情景。下段为攻城、水战等场面，是战国诸侯进行兼并战争的反映。藏四川省博物馆。'
        },
        {
          img: require('@/assets/home/tx04.png'),
          name: '瑞鹤图',
          src:'http://bwqz.newdi.com/rht/#/detail_2d',
          num:{
            num1:19,
            num2:21,
            num3:41,
            num4:39
          },
          text:'《瑞鹤图》是北宋宋徽宗赵佶所作绢本设色画，现藏于辽宁省博物馆。《瑞鹤图》描绘了鹤群盘旋于宫殿之上的壮观景象，绘画技法精妙，图中群鹤如云似雾，姿态百变，各具特色'
        },
        // {
        //   img: require('@/assets/home/tx05.png'),
        //   name: '万山秋色',
        //   src:'https://chim.newdi.com/mobile_project/testIndex.html?res=1bf4a930-8ee8-40a3-b27c-637c43ad217f.chim'
        // }, 
        {
          img: require('@/assets/home/tx06.png'),
          name: '白啼乌',
          src:'https://chim.newdi.com/chim_mobile_project/testIndex.html?res=ed0aa514-a35d-4304-aa62-f39552343891.chim',
          num:{
            num1:45,
            num2:21,
            num3:25,
            num4:29
          },
          text:'唐昭陵六骏石刻是为纪念六匹随唐太宗征战疆场的战马而刻制的。传为当时工艺家阎立德、画家阎立本所作。唐昭陵六骏石刻采用高浮雕手法，六骏每件宽约204厘米，高约172厘米，厚约40厘米，均为青石质地。白蹄乌，昭陵六骏之一，是有四只白蹄的纯黑色战马，为李世民与薛仁杲作战时的坐骑。'
        },
        {
          img: require('@/assets/home/太阳神鸟金饰.png'),
          name: '太阳神鸟金饰',
        },
        {
          img: require('@/assets/home/博山炉.png'),
          name: '博山炉',
        },{
          img: require('@/assets/home/大盂鼎.png'),
          name: '大盂鼎',
        },{
          img: require('@/assets/home/斗彩鸡缸杯.png'),
          name: '斗彩鸡缸杯',
        },{
          img: require('@/assets/home/击鼓说唱俑.png'),
          name: '击鼓说唱俑',
        },{
          img: require('@/assets/home/青铜神树.png'),
          name: '青铜神树',
        },{
          img: require('@/assets/home/青铜獬豸.png'),
          name: '青铜獬豸',
        },{
          img: require('@/assets/home/陶船.png'),
          name: '陶船',
        },{
          img: require('@/assets/home/铜奔马.png'),
          name: '铜奔马',
        },{
          img: require('@/assets/home/雁鱼灯.png'),
          name: '雁鱼灯',
        },{
          img: require('@/assets/home/玉猪龙.png'),
          name: '玉猪龙',
        },
        
      ],
    }
  },
  mounted() {
    if(sessionStorage.getItem('wenwuIndex')) this.active = Number(sessionStorage.getItem('wenwuIndex')) 
  },
  methods: {
    openWenwu(index){
        this.$router.push({
            path: '/iframe',
            query:{
                url:this.culturalList[index].src,
                path:'/',
                type:this.type
            }
        })
        sessionStorage.setItem('wenwuIndex', this.active)
    },
    toFun(type){
      if(type === 'panorama') {
        this.$router.push({
          path: '/panorama'
        })
      } else if (type === 'kong') {
        this.$router.push({
          path: '/sky'
        })
      } else if (type === 'guan') {
        this.$router.push({
          path: '/exhibition'
        })
      } else if (type === 'wu') {
        this.$router.push({
          path: '/subject'
        })
      } else if (type === 'bo') {
        this.$router.push({
          path: '/iframe',
          query:{
            url:'http://chim.newdi.com/hw/#/first',
            path:'/'
          },
        })
      }
    },
    onChange(index) {
      if(index > 4) return
      this.active = index
      sessionStorage.setItem('wenwuIndex', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 2880px;
  height: 100vh;
  background-image: url('../assets/home/back.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  .cultural-box{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 1491px;
    height: 1578px;
    position: absolute;
    top: 0px;
    left: 550px;
    .cultural-img{
      width: 1043px;
      height: 906px;
      position: absolute;
      left: 30px;
      top: 260px;
    }
    .picture{
      width: 1280px;
      height: 1076px;
      position: absolute;
      left: -50px;
      top:250px;
      overflow-x: scroll;
      background-image: url('@/assets/jz_down01.png');
      background-size: 100% 100%;
      z-index: 999;
      .jz_up{
        width: 1280px;
        height: 1076px;
        position: absolute;
        z-index: 1;
      }
      .jz-box{
        position: absolute;
        top: 220px;
        left: 150px;
        width: 990px;
        overflow: hidden;
        display: flex;
          .img{
            flex-shrink: 0;
            flex-basis: auto;
            width: 3250px;
            height: 679px;
            background-image: url('@/assets/home/ruihetu01.jpg');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .img1{
            flex-grow: 1;
            animation: scroll-right1 60s linear infinite;
            animation-delay: 0s;
          }
          .img2{
            flex-grow: 1;
            animation: scroll-right 60s linear infinite;
            animation-delay: 0s;
          }
          .yuyintu{
            background-image: url('@/assets/home/yuyintu.png');
          }
          @keyframes scroll-right1 {
            from {
              transform: translateX(-169%);
            }
            to {
              transform: translateX(0%);
            }
          }
          @keyframes scroll-right {
            from {
              transform: translateX(-169%);
            }
            to {
              transform: translateX(-0%);
            }
          }
      }
    }
    .changxingongdeng{
      width: 1280px;
      height: 1076px;
      margin-top: 220px;
    }
    .tonghu{
      width: 1280px;
      height: 1076px;
      margin-top: 280px;
      margin-left: -80px
    }
  }
  .select-box{
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; 
    .cultural-select-box{
      width: 100%;
      height: 1100px;
      margin: auto;
      overflow-y: scroll;
      .cultural-item{
        margin-bottom: 20px;
        position: relative;
        img{
          width: 262px;
          height: 168px;
        }
        .border{
          position: absolute;
          left: 0px;
          top: 0px;
        }
        p{
          font-size: 20px;
          text-align: center;
          color: #dafdfe;
        }
      }
      .active{
        opacity: 1 !important;
      }
      .cultural-item-0{
        opacity: 0.4;
      }
      .cultural-item-1{
        opacity: 0.7;
      }
      .cultural-item-3{
        opacity: 0.7;
      }
      .cultural-item-4{
        opacity: 0.4;
      }
      .cultural-item-5{
        opacity: 0.2;
      }
    } 
   
  }
  .wenwu-name-box{
    position: absolute;
    bottom: 0px;
    width: 1200px;
    display: flex;
    justify-content: center;
    left: 530px;
    img:nth-of-type(1){
      width: 649px;
      height: 484px
    }
    img:nth-of-type(2){
      width: 593px;
      height: 481px
    }
    img:nth-of-type(3){
      width: 746px;
      height: 486px
    }
    img:nth-of-type(4){
      width: 550px;
      height: 477px
    }
    img:nth-of-type(5){
      width: 545px;
      height: 474px
    }
  }
  .user-msg{
    width: 460px;
    height: 213px;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .home-icon2{
    width: 942px;
    height: 891px;
    background-image: url('../assets/home/home-icon2.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 50px;
    top: 443px;
    .button1{
      margin-top: 60px
    }
    .button2{
      margin-top: 20px
    }
    .line-btn{
      width: 750px;
      height: 200px;
      margin-left: 60px;
    }
    .btn-list{
      width: 750px;
      display: flex;
      margin-left: 70px;
      div{
        width: 220px;
        height: 230px;
        margin-right: 30px;
      }
    }
  }
  .footer{
    width: 100%;
    // background-color: #141945;
    height: 69px;
    bottom: 0px;
    display: flex;
    align-items: center;
    position: absolute;
    .foot-icon{
      width: 491px;
      height: 46px;
      // background-image: url('@/assets/home/foot-label.png');
      // background-size: 100% 100%;
      display: flex;
      align-items: center;
      .name{
        margin-left: 280px;
        color: #4146b1;
        font-size: 12px;
        font-weight: bold;
        font-size: 24px;
        width: 200px;
        text-align: center;
      }
    }
    .foot-text{
      margin-left: 20px;
      .notice-bar{
        // position: absolute;
        color: #dafdfe;
        width: 100%;
        background-color: #141945;
        height: 100%;
      }
    }
    .notice-bar{
      padding-left: 50px !important;
      font-size: 28px !important;
    }
  }
  .cultural-num{
    width: 483px;
    height: 202px;
    bottom: 350px;
    position: absolute;
    left: 405px;
    img{
      width: 483px;
    height: 202px;
    }

  }
}
</style>
