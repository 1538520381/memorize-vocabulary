<template>
    <div class="container">
        <div class="mainContainer">
            <div class="finishContainer">
                测试完成
            </div>
            <div class="circleProgressContainer">
                <circle-progress :progress="score.toString()"></circle-progress>
            </div>
            <div class="scoreContainer">
                {{ round(this.score, 0) + '分' }}
            </div>
            <div class="buttonConatiner">
                <el-button type="primary" @click="$router.push('/home')">返回主页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { round } from '@/utils/common'
export default {
    name: 'finish',
    data() {
        return {
            score: 0
        }
    },
    created() {
        this.score = this.$route.query.score
    },
    methods: {
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
    align-items: center;
    background-color: antiquewhite;
}

.mainContainer {
    width: 80%;
    height: 80%;
}

.finishContainer {
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
}

.circleProgressContainer {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.scoreContainer {
    width: 100%;
    margin-top: 25px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}

.buttonConatiner {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>