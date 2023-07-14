<template>
    <div class="container">
        <el-container>
            <el-header class="headerContainer">成绩查询</el-header>
            <el-main class="mainContainer">
                <el-form class="dateContainer">
                    <el-form-item label="开始时间">
                        <el-date-picker v-model="date" type="date" placeholder="选择日期" @change="getScore()"></el-date-picker>
                    </el-form-item>
                </el-form>
                <div class="scoresContainer">
                    <div class="scoreContainer">
                        <span class="labelContainer">
                            平均分：
                        </span>
                        <span class="dataContainer">
                            {{ round(score.avgScore, 1) }}
                        </span>
                    </div>
                    <div class="scoreContainer">
                        <span class="labelContainer">
                            学习次数：
                        </span>
                        <span class="dataContainer">
                            {{ score.studyTime }}
                        </span>
                    </div>
                </div>
            </el-main>
            <el-footer class="footerContainer">
                <Menu :current="2"></Menu>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { getScore } from '@/api/user/score';

import { round } from '@/utils/common';

import Menu from '@/components/user/menu/Menu.vue';

export default {
    name: 'score',
    components: {
        Menu
    },
    data() {
        return {
            date: null,

            score: {}
        }
    },
    created() {
        this.date = new Date()
        this.getScore()
    },
    methods: {
        getScore() {
            getScore(this.date.getYear() + 1900, this.date.getMonth() + 1, this.date.getDate()).then((res) => {
                if (res.data.code == 1) {
                    this.score = res.data.data
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

.headerContainer {
    width: 100%;
    padding-top: 20px;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.mainContainer {
    width: 100%;
    padding-top: 20px;
}

.scoreContainer {
    width: 100%;
    font-size: 20px;
    padding-left: 10px;
}

.labelContainer {
    width: 100px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    padding: 5px 0 5px 0;
}

.footerContainer {
    height: 50px !important;
    background-color: aliceblue;
}
</style>