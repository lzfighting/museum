<template>
    <div class="subject">
        <backView :backType="1" path="/"></backView>
        <img class="back"  src="@/assets/back_wu.png" alt="">
        <!-- <div class="content">
            <img class="bg-img" src="@/assets/物.png" alt="">
            <div class="list">
                <div class="array1 array">
                    <div class="left">
                        <div class="special"></div>
                        <div class="box"></div>
                    </div>
                <div class="right">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                </div>
                </div>
                <div class="array2 array">
                    <div class="left">
                        <div class="box"></div>
                        <div class="special"></div>
                    </div>
                <div class="right">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                </div>
                </div>
                <div class="array3 array">
                    <div class="left">
                        <div class="special"></div>
                        <div class="box"></div>
                    </div>
                <div class="right">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                </div>
                </div>
                <div class="array4 array">
                    <div class="left">
                        <div class="box"></div>
                        <div class="special"></div>
                    </div>
                <div class="right">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                </div>
                </div>
            </div>
        </div> -->
        <div class="content">
            <div class="list">
                <div class="list-box">
                    <div class="array1 array">
                        <div class="left">
                            <div class="special" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTZobF8yMDIxMTEyNjAzMTAwNDc3Nw')"></div>
                            <div class="box" @click="toFun('http://chim.newdi.com/jyk/#/list?id=MjZsZV8yMDIwMDIxOTEwMzMxNTE1NA')"></div>
                        </div>
                        <div class="right">
                            <div class="box" @click="toFun('http://chim.newdi.com/jyk/#/list?id=MDNjZl8yMDIwMDMxMDA0MzkyMDgyOA')"></div>
                            <div class="box" @click="toFun('http://chim.newdi.com/jyk/#/list?id=MDk3Ml8yMDIxMTEyNjAyMzE0NDgyOQ')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTYzNl8yMDIxMTEyNjAzMDg1NjI3Mg')"></div>
                         </div>
                    </div>
                    <div class="array2 array">
                        <div class="left">
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MDc0ZV8yMDIxMTEyNjAzMDkxOTA4OA')"></div>
                            <div class="special" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MDY4bF8yMDIyMDExMzAyMDQwNjE5OA')"></div>
                        </div>
                    <div class="right">
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MjY1a18yMDIxMTEyNjAzMDkwOTA4Ng')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MDcwMV8yMDIyMDExMzAyMDQzODE0Mw')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTY2a18yMDIwMDIxOTEwMzMyNjMwMw')"></div>
                    </div>
                    </div>
                    <div class="array3 array">
                        <div class="left">
                            <div class="special" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MjZrbF8yMDIyMDExMzAyMDM0NDE3NA')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MjhrZF8yMDIxMTIwMzA1MTUxMTAyMg')"></div>
                        </div>
                    <div class="right">
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MjM0Yl8yMDIwMDMxMDA1MDQyNTc3MA')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTVlZV8yMDIxMTEyNjAzMTA0NjQxNg')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTVlZV8yMDIxMTEyNjAzMTA0NjQxNg')"></div>
                    </div>
                    </div>
                    <div class="array4 array">
                        <div class="left">
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTVlaV8yMDIxMTEyNjAzMTAzNTMxMA')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MDc0ZV8yMDIxMTEyNjAzMDkxOTA4OA')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MDcwMV8yMDIyMDExMzAyMDQzODE0Mw')"></div>

                        </div>
                    <div class="right">
                            <div class="box" @click="toFun('http://chim.newdi.com/jyk/#/list?id=MDU0al8yMDIwMDMxMDA1MTY0MjUyMw')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MTY2a18yMDIwMDIxOTEwMzMyNjMwMw')"></div>
                            <div class="box" @click="toFun('https://chim.newdi.com/jyk/#/list?id=MjY1a18yMDIxMTEyNjAzMDkwOTA4Ng')"></div>
                    </div>
                    </div>
                </div>
            </div>
       
        </div>
    </div>
</template>

<script>
export default {
    name:'subject-view',
    data () {
        return {}
    },
    methods: {
        toFun(src){
            this.$router.push({
                path: '/iframe',
                query:{
                    url:src,
                    path:'/subject',
                    type:this.type
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.subject{
    height: 100vh;
    width: 100vw;
    background-image: url('@/assets/bg1.png');
    .content{
        width: 100vw;
        height: 1800px;
        overflow: hidden;
        overflow-x: scroll;
        position: absolute;
        .list{
            width: 5245px;
            height: 1800px;
            top: 40px;
            left: 100px;
            display: flex;
            background-image: url('@/assets/主题02.png');
            background-size: 100% 100%;
            position: absolute;
            .array{
                display: flex;
                width: 1150px;
                height: 1350px;
                position: absolute;
                top: 230px;
            }
            .array1{
                left: 100px;
            }
            .array2{
                left: 1350px;
            }
            .array3{
                left: 2550px;
            }
            .array4{
                left: 3800px;
            }
            .left{
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    .special{
                        width: 550px;
                        height: 850px;
                    } 
                    div{
                        margin-top: 30px;
                        width: 550px;
                        height: 400px;
                        display: inline-block
                    }
                }
                .right{
                    margin-left: 50px;
                    div{
                        margin-bottom: 60px;
                        width: 550px;
                        height: 400px;
                        display: inline-block
                    }
                }
        }
    }
    .back{
        width: 379px;
        height: 110px;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 99;
    }

}
</style>