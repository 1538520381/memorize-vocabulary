<template>
    <div class="container">
        <el-container>
            <el-header class="headerContainer">
                <el-page-header class="pageHeaderContainer" @back="$router.push('/home')" content="词书列表">
                </el-page-header>
            </el-header>
            <el-main class="mainContainer">
                <div class="booksContainer">
                    <div class="bookContainer">
                        <div class="bookPhoto">
                            我是词书封面
                        </div>
                        <div class="informationContainer">
                            <div class="nameContainer">
                                四级词汇
                            </div>
                            <div class="wordNumContainer">
                                1000词
                            </div>
                        </div>
                        <div class="useBookButtonContainer">
                            <el-button class="useBookButton" type="primary">选择此书</el-button>
                        </div>
                    </div>
                    <div class="bookContainer">

                    </div>
                    <div class="bookContainer">

                    </div>
                </div>
            </el-main>
            <el-footer class="footerContainer">
                <div class="paginationContainer">
                    <el-pagination layout="prev, pager, next" :total="50">
                    </el-pagination>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'bookList',
    created(){
        
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

.pageHeaderContainer {
    height: 100%;
    display: flex;
    align-items: center;
}

.mainContainer {
    height: 80%;
    display: flex;
    justify-content: center;
}

.booksContainer {
    width: calc(90% - 40px);
    height: calc(100% - 60px);
    padding: 20px 30px 20px 30px;
    border-radius: 30px;
    background-color: aliceblue;
}

.bookContainer {
    width: 100%;
    height: calc(33% - 20px);
    margin: 10px 0px 20px 0px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
}

.bookPhoto {
    width: 30%;
    height: 100%;
    float: left;
    background-color: rgb(238, 240, 240);
}

.informationContainer{
    width: 70%;
    height: 50%;
    float: left;
}

.nameContainer{
    width: calc(60% - 10px);
    height: 100%;
    padding-left: 10px;
    font-size: 20px;
    float: left;
    display: flex;
    align-items: center;
}

.wordNumContainer{
    width: 40%;
    height: 100%;
    font-size: 16px;
    float: left;
    display: flex;
    align-items: center;
}

.useBookButtonContainer{
    width: 70%;
    height: 50%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.useBookButton{
    width: 60%;
    height: 80%;
}

.footerContainer {
    height: 60px !important;
}

.paginationContainer {
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>