<template>
    <div class="container">
        <div class="mainContainer">
            <div class="modelContainer">
                {{ mode == 1 ? '自测' : '考试' }}
            </div>
            <div class="questionContainer" v-if="currentType == 0">
                <div class="questionStemContainer">
                    {{ trueOptions[index].word }}
                </div>
                <div class="questionOptionsContainer" v-if="optionsRefresh">
                    <div :class="checkFlag == 0 ? 'questionOptionContainer' : (checkFlag == 1 ? 'questionTrueOptionContainer' : 'questionFalseOptionContainer')"
                        v-for="(item, value) in currentOptions" @click="check(value)">
                        <span class="questionOptionItem">{{ item.translation }}</span>
                    </div>
                </div>
            </div>
            <div class="questionContainer" v-else>
                <div class="questionStemContainer">
                    {{ trueOptions[index].translation }}
                </div>
                <div class="questionOptionsContainer" v-if="optionsRefresh">
                    <div :class="checkFlag == 0 ? 'questionOptionContainer' : (checkFlag == 1 ? 'questionTrueOptionContainer' : 'questionFalseOptionContainer')"
                        v-for="(item, value) in currentOptions" @click="check(value)">
                        <span class="questionOptionItem">{{ item.word }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getQuestions } from '@/api/user/exam'
import { getMemorizedWords } from '@/utils/localStroageUtil'
export default {
    name: 'exam',
    data() {
        return {
            mode: 1,

            trueOptions: [],
            falseOptions: [],

            index: 0,
            currentType: 0,
            currentStem: {},
            currentOptions: [],
            checkFlag: [0, 0, 0, 0],
            optionsRefresh: true,

            trueNum: 0,
            falseNum: 0

        }
    },
    created() {
        getQuestions(getMemorizedWords()).then((res) => {
            if (res.data.code == 1) {
                this.trueOptions = res.data.data.trueWord
                this.falseOptions = res.data.data.falseWord
            } else {
                this.$message.error(res.data.msg)
            }
        })
        this.mode = this.$route.query.type
        this.getNewQuestion()
    },
    methods: {
        getNewQuestion() {
            this.currentStem = {}
            this.currentOptions = []
            if (Math.random() < 0.6) {
                this.currentType = 0
            } else {
                this.currentType = 1;
            }
            this.currentOptions.push(this.trueOptions[this.index])
            for (var i = 0; i <= 2; i++) {
                this.currentOptions.push(this.falseOptions[this.index * 3 + i])
            }
            this.currentOptions.sort(function () {
                return (0.5 - Math.random())
            })
        },
        check(index) {
            if (this.currentOptions[index].word == this.trueOptions[this.index].word) {
                this.checkFlag[index] = 1
                this.trueNum++
            } else {
                this.checkFlag[index] = 2
                this.falseNum++
            }
            this.refresh()
            setTimeout(function () {
                index++
                this.getNewQuestion()
            }, 2000)
        },
        refresh() {
            this.optionsRefresh = false
            this.optionsRefresh = true
        },
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
    height: 100%;
}

.modelContainer {
    width: 100%;
    height: 80px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(225, 175, 109);
}

.questionContainer {
    width: 96%;
    height: calc(100% - 120px);
    border-radius: 30px;
    padding: 20px 2% 20px 2%;
}

.questionStemContainer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}

.questionOptionsContainer {
    width: 80%;
    padding: 20px 10% 20px 10%;
    cursor: pointer;
}

.questionOptionContainer {
    width: calc(100% - 40px);
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: rgb(216, 161, 88);
}

.questionTrueOptionContainer {
    width: calc(100% - 40px);
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: rgb(94, 213, 80);
}

.questionFalseOptionContainer {
    width: calc(100% - 40px);
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: rgb(209, 56, 39);
}

.questionOptionContainer:hover {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 30px;
    background-color: rgb(211, 183, 146);
}

.questionOptionTrueContainer {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(94, 213, 80);
}

.questionOptionFalseContainer {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(209, 56, 39);
}

.questionOptionChoiceContainer {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(20, 196, 219);
}

.questionOptionId {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: inline-block;
    text-align: center;
    background-color: rgb(239, 212, 151);
}

.questionOptionItem {
    padding: 8px;
}
</style>