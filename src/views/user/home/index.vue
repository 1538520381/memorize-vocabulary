<template>
    <div class="container">
        <el-container>
            <el-main class="mainContainer">
                <div class="titleContainer">
                    10ve4Word5
                </div>
                <div class="bookConatiner">
                    <div class="bookPhoto">
                        我是词书封面
                    </div>
                    <div class="bookTitle">
                        四级词汇
                    </div>
                    <div class="selectBook" @click="$router.push('/bookList')">
                        更改➢
                    </div>
                </div>
                <div class="modeContainer">
                    <div class="selfTestMode" @click="$router.push({ path: '/exam', query: { type: 0 } })">
                        <div class="picture">
                            我是图片
                        </div>
                        <div class="mode">
                            自测
                        </div>
                    </div>
                    <div class="testMode" @click="$router.push({ path: '/exam', query: { type: 1 } })">
                        <div class=" picture">
                            我是图片
                        </div>
                        <div class="mode">
                            考试
                        </div>
                    </div>
                </div>
            </el-main>
            <el-footer class="footerContainer">
                <Menu :current="1"></Menu>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { getUser } from '@/api/util';
import Menu from '@/components/user/menu/Menu.vue';
export default {
    name: 'home',
    components: {
        Menu
    },
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            getUser().then((res) => {
                if (res.data.code == 1) {
                    this.user = res.data.data
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: antiquewhite;
}

.mainContainer {
    width: 100%;
    padding-top: 20px;
}

.titleContainer {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
}

.bookConatiner {
    width: calc(100% - 40px);
    height: 100px;
    padding: 20px;
    border-radius: 40px;
    background-color: rgb(248, 210, 161);
}

.bookPhoto {
    width: 30%;
    height: 100%;
    float: left;
    background-color: rgb(238, 240, 240);
}

.bookTitle {
    max-width: 36%;
    padding-left: 15px;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.selectBook {
    padding-left: 5px;
    float: left;
    color: grey;
}

.modeContainer {
    width: calc(100% - 30px);
    height: 230px;
    margin-top: 20px;
    padding: 15px;
    border-radius: 40px;
    background-color: rgb(248, 210, 161);
}

.selfTestMode {
    width: 100%;
    height: calc(50% - 10px);
    border-radius: 20px;
    background-color: rgb(40, 110, 234);
}

.picture {
    width: 80px;
    height: calc(100% - 40px);
    padding: 20px;
    float: left;
    background-color: white;
}

.mode {
    width: calc(100% - 120px);
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: white;
}

.testMode {
    width: 100%;
    height: calc(50% - 10px);
    margin-top: 20px;
    border-radius: 20px;
    background-color: rgb(253, 203, 46);
}

.footerContainer {
    height: 50px !important;
    background-color: aliceblue;
}
</style>