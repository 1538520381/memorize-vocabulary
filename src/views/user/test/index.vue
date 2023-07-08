<template>
    <div class="container">
        <div class="mainContainer">
            <div class="modelContainer">
                {{ mode == 1 ? '自测' : '考试' }}
            </div>
            <div class="questionContainer">
                <div class="questionStemContainer">
                    {{ currentQuestion.stem }}
                </div>
                <div class="questionOptionsContainer">
                    <div :class="{ 'questionOptionContainer': currentQuestion.options[index].optionFlag == 0, 'questionOptionTrueContainer': currentQuestion.options[index].optionFlag == 1, 'questionOptionFalseContainer': currentQuestion.options[index].optionFlag == 2, 'questionOptionChoiceContainer': currentQuestion.options[index].optionFlag == 3 }"
                        v-for="(item, index) in  currentQuestion.options ">
                        <span class="questionOptionId">{{ String.fromCharCode('A'.charCodeAt(0) + index) }}</span>
                        <span class="questionOptionItem">{{ item.option }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    props: [
        'mode'
    ],
    data() {
        return {
            currentQuestion: {
                stem: 'apple',
                options: [
                    {
                        option: '苹果',
                        optionFlag: 0
                    },
                    {
                        option: '桃子',
                        optionFlag: 0
                    },
                    {
                        option: '橙子',
                        optionFlag: 0
                    },
                    {
                        option: '香蕉',
                        optionFlag: 0
                    },
                ]
            }
        }
    },
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
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
    background-color: rgb(216, 161, 88);
}

.questionOptionContainer:hover {
    width: calc(100% - 40px);
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    font-size: 20px;
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