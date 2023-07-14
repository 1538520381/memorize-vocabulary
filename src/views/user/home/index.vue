<template>
    <div class="container">
        <el-container>
            <el-main class="mainContainer">
                <div class="titleContainer">
                    10ve4Word5
                </div>
                <div class="bookConatiner">
                    <div class="bookCoverContainer">
                        <img class="bookCover" :src="userBook.cover">
                    </div>
                    <div class="bookTitle">
                        {{ userBook.title }}
                    </div>
                    <div class="selectBook" @click="$router.push('/bookList')">
                        更改➢
                    </div>
                    <div class="studyProgressContainer">
                        <div class="studyProgressTitle">
                            学习进度：
                        </div>
                        <div class="studyProgress">
                            <el-progress :percentage="round(hadStudyNum,1)"></el-progress>
                        </div>
                    </div>
                </div>
                <div class="modeContainer">
                    <div class="selfTestMode" @click="$router.push({ path: '/exam', query: { type: 0 } })">
                        <!-- <div class="picture">
                            我是图片
                        </div> -->
                        <div class="mode">
                            自测
                        </div>
                    </div>
                    <div class="testMode" @click="$router.push({ path: '/exam', query: { type: 1 } })">
                        <!-- <div class=" picture">
                            我是图片
                        </div> -->
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
import { getBookById } from '@/api/user/home';
import Menu from '@/components/user/menu/Menu.vue';
import { getMemorizedWords } from '@/utils/localStroageUtil';
import { round } from '@/utils/common'
export default {
    name: 'home',
    components: {
        Menu
    },
    data() {
        return {
            user: {},
            userBook: {},
            hadStudyNum: 0,
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
                    this.getUserBook()
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        getUserBook() {
            getBookById(getMemorizedWords().split(',')).then((res) => {
                console.log(res.data.data)
                if (res.data.code == 1) {
                    this.userBook = res.data.data.book
                    console.log(res.data.data.unStudy)
                    this.hadStudyNum = (parseInt(this.userBook.num) - res.data.data.unStudy) / parseInt(this.userBook.num) * 100
                    console.log(this.hadStudyNum)
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        round: round
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
    width: calc(100% - 20px);
    height: 120px;
    padding: 20px 0px 0px 20px;
    border-radius: 40px;
    background-color: rgb(248, 210, 161);
}

.bookCoverContainer {
    height: calc(100% - 20px);
    float: left;
    background-color: rgb(238, 240, 240);
}

.bookCover {
    height: 100%;
}

.bookTitle {
    max-width: 40%;
    height: 30%;
    padding-left: 15px;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.selectBook {
    padding-left: 5px;
    height: 30%;
    float: left;
    color: grey;
}

.studyProgressContainer {
    width: 75%;
    height: 70%;
    padding: 20px 0px 0px 0px;
    float: left;
}

.studyProgressTitle {
    height: 70%;
    padding-left: 15px;
    float: left;
}

.studyProgress {
    width: 57%;
    height: 70%;
    float: left;
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
    display: flex;
    justify-content: center;
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
    display: flex;
    justify-content: center;
}

.footerContainer {
    height: 50px !important;
    background-color: aliceblue;
}
</style>