<template>
    <div class="container">
        <el-container>
            <el-header class="headerContainer">
                <el-page-header class="pageHeaderContainer" @back="$router.push('/home')" content="词书列表">
                </el-page-header>
            </el-header>
            <el-main class="mainContainer">
                <div class="searchConatiner">
                    <input class="searchInput" placeholder="请输入您要查询的书名" v-model="search" @change="getBookList()">
                </div>
                <el-scrollbar class="booksContainer">
                    <div class="bookContainer" v-for="item in bookList">
                        <div class="bookCoverContainer">
                            <img class="bookCover" :src="item.cover">
                        </div>
                        <div class="informationContainer">
                            <div class="nameContainer">
                                {{ item.title }}
                            </div>
                            <div class="wordNumContainer">
                                {{ item.num }}
                            </div>
                        </div>
                        <div class="useBookButtonContainer">
                            <el-button class="useBookButton" type="primary" @click="chooseBook(item.id)">选择此书</el-button>
                        </div>
                    </div>
                </el-scrollbar>
            </el-main>
            <el-footer class="footerContainer">
                <div class="paginationContainer">
                    <el-pagination small layout="prev, pager, next" :current-page.sync="page" :total="pageNum"
                        :page-size="pageNum" @current-change="getBookList()">
                    </el-pagination>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { chooseBook, getBookList } from '@/api/user/bookList';

export default {
    name: 'bookList',
    data() {
        return {
            bookList: [],
            page: 1,
            pageNum: 3,
            search: ''
        }
    },
    created() {
        this.getBookList()
    },
    methods: {
        getBookList() {
            console.log(this.page)
            console.log(this.pageNum)
            console.log(this.search)
            getBookList(this.page, this.pageNum, this.search).then((res) => {
                if (res.data.code == 1) {
                    this.bookList = res.data.data
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        chooseBook(bookId) {
            chooseBook(bookId).then((res) => {
                if (res.data.code == 1) {
                    this.$message.success('选择成功')
                    this.getBookList()
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

.pageHeaderContainer {
    height: 100%;
    display: flex;
    align-items: center;
}

.mainContainer {
    height: 80%;
}

.searchConatiner {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchInput {
    width: 80%;
    height: 66%;
    padding: 2px 15px 2px 15px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 20px;
}

.booksContainer {
    width: calc(100% - 60px);
    height: calc(100% - 140px);
    padding: 20px 30px 20px 30px;
    border-radius: 30px;
    background-color: aliceblue;
    display: inline-block;
}

.bookContainer {
    width: 100%;
    height: calc(33% - 20px);
    margin: 10px 0px 20px 0px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
}

.bookCoverContainer {
    height: 100%;
    float: left;
    background-color: rgb(238, 240, 240);
}

.bookCover {
    height: 100%;
}

.informationContainer {
    width: 70%;
    height: 50%;
    float: left;
}

.nameContainer {
    width: calc(60% - 10px);
    height: 100%;
    padding-left: 10px;
    font-size: 20px;
    float: left;
    display: flex;
    align-items: center;
}

.wordNumContainer {
    width: 40%;
    height: 100%;
    font-size: 16px;
    float: left;
    display: flex;
    align-items: center;
}

.useBookButtonContainer {
    width: 70%;
    height: 50%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
}

.useBookButton {
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