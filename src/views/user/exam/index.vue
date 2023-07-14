<template>
    <div class="container">
        <div class="mainContainer">
            <div class="modelContainer">
                {{ mode == 0 ? '自测' : '考试' }}
            </div>
            <div class="questionContainer" v-if="currentType == 0">
                <div class="questionStemContainer">
                    <span class="stem">
                        {{ trueOptions[index].word }}
                    </span>
                    <span class="videoContainer" @click="audio()">
                        <svg-icon class="video" icon-class="video"></svg-icon>
                    </span>
                </div>
                <div class="questionOptionsContainer" v-if="optionsRefresh">
                    <div :class="checkFlag[value] == 0 ? 'questionOptionContainer' : (checkFlag[value] == 1 ? 'questionTrueOptionContainer' : 'questionFalseOptionContainer')"
                        v-for="(item, value) in currentOptions" @click="check(value)">
                        <span class="questionOptionItem">{{ item.translation }}</span>
                    </div>
                </div>
            </div>
            <div class="questionContainer" v-else>
                <div class="questionStemContainer">
                    <span class="stem">
                        {{ trueOptions[index].translation }}
                    </span>
                </div>
                <div class="questionOptionsContainer" v-if="optionsRefresh">
                    <div :class="checkFlag[value] == 0 ? 'questionOptionContainer' : (checkFlag[value] == 1 ? 'questionTrueOptionContainer' : 'questionFalseOptionContainer')"
                        v-for="(item, value) in currentOptions" @click="check(value)">
                        <span class="questionOptionItem">{{ item.word }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getQuestions, saveNewStudy, saveWrongWords } from '@/api/user/exam'
import { getMemorizedWords, setMemorizedWords } from '@/utils/localStroageUtil'
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

            newStudy: [],
            wrongStudy: [],

            trueNum: 0,
            falseNum: 0
        }
    },
    created() {
        getQuestions(getMemorizedWords().split(',')).then((res) => {
            if (res.data.code == 1) {
                this.trueOptions = res.data.data.trueWord
                this.falseOptions = res.data.data.falseWord
                this.mode = this.$route.query.type
                this.getNewQuestion()
            } else {
                this.$message.error(res.data.msg)
                this.$router.push('/home')
            }
        })
        var _this = this
    },
    methods: {
        getNewQuestion() {
            if (this.index < this.trueOptions.length) {
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
                this.checkFlag = [0, 0, 0, 0]
            } else {
                if (this.mode == 1) {
                    this.saveNewStudy()
                }
                this.$router.push({ path: '/finish', query: { score: this.trueNum / (this.trueNum + this.falseNum) * 100 } })
            }
        },
        check(index) {
            if (this.checkFlag[0] + this.checkFlag[1] + this.checkFlag[2] + this.checkFlag[3] == 0) {
                if (this.currentOptions[index].word != this.trueOptions[this.index].word) {
                    this.checkFlag[index] = 2
                    this.falseNum++
                    this.wrongStudy.push(this.trueOptions[this.index].id)
                }
                for (var i = 0; i < 4; i++) {
                    if (this.currentOptions[i].word == this.trueOptions[this.index].word) {
                        this.checkFlag[i] = 1
                        if (i == index) {
                            this.trueNum++
                            this.newStudy.push(this.trueOptions[this.index].id)
                        }
                    }
                }
                this.refresh()
                var _this = this
                setTimeout(function () {
                    _this.index++
                    _this.getNewQuestion()
                }, 2000)
            }
        },
        saveNewStudy() {
            var array = getMemorizedWords().split(',')
            for (var i = 0; i < this.newStudy.length; i++) {
                array.push(this.newStudy[i])
            }
            setMemorizedWords(array)
            saveNewStudy(this.newStudy).then((res) => {
                if (res.data.code == 1) {

                } else {
                    this.$message.error(res.data.msg)
                }
            })
            saveWrongWords(this.wrongStudy).then((res) => {
                if (res.data.code == 1) {

                } else {
                    this.$message.error(res.data.msg)
                }
            })
            this.newStudy = []
            this.wrongStudy = []
        },
        audio() {
            var audio = new Audio('http://dict.youdao.com/dictvoice?audio=' + this.trueOptions[this.index].word)
            audio.play()
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
    -webkit-tap-highlight-color: transparent;
}

.questionStemContainer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.stem{
    height: 100%;
    font-size: 25px;
}

.videoContainer {
    width: 20px;
    height: 20px;
    padding-left: 5px;
}

.video {
    width: 20px;
    height: 20px;
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
    font-size: 20px;
    background-color: white;
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
    font-size: 20px;
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
    font-size: 20px;
    background-color: rgb(228, 121, 109);
}

.questionOptionContainer:hover {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
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
    width: 90%;
    padding: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>