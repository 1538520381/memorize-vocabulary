<template>
    <div class="container">
        <el-container>
            <el-main class="mainContainer">
                <div class="avatarContainer">
                    <img class="avatar" :src="user.avatar">
                </div>
                <div class="nickname">
                    {{ user.nickName }}
                </div>
                <div class="listsContainer">
                    <div class="listContainer">
                        <el-button class="listItem" @click="changeNameDialog(true)">
                            <svg-icon class="icon" icon-class="nickname"></svg-icon>
                            <span class="item">
                                修改昵称
                            </span>
                        </el-button>
                    </div>
                    <div class="listContainer">
                        <el-button class="listItem" @click="changeAvatarDialog(true)">
                            <svg-icon class="icon" icon-class="avatar"></svg-icon>
                            <span class="item">
                                修改头像
                            </span>
                        </el-button>
                    </div>
                    <div class="listContainer">
                        <el-button class="listItem" @click="changePasswordDialog(true)">
                            <svg-icon class="icon" icon-class="password"></svg-icon>
                            <span class="item">
                                修改密码
                            </span>
                        </el-button>
                    </div>
                    <div class="listContainer">
                        <el-button class="listItem">
                            <svg-icon class="icon" icon-class="contact"></svg-icon>
                            <span class="item">
                                联系我们
                            </span>
                        </el-button>
                    </div>
                    <div class="listContainer" @click="logout()">
                        <el-button class="listItem">
                            <svg-icon class="icon" icon-class="logout"></svg-icon>
                            <span class="item">
                                退出登录
                            </span>
                        </el-button>
                    </div>
                </div>
            </el-main>
            <el-footer class="footerContainer">
                <Menu :current="3"></Menu>
            </el-footer>
        </el-container>
        <ChangeName :changeNameDialogVis="changeNameDialogVis" :nickname="user.nickName"
            @changeNameDialog="changeNameDialog"></ChangeName>
        <ChangeAvatar :changeAvatarDialogVis="changeAvatarDialogVis" :avatar="user.avatar"
            @changeAvatarDialog="changeAvatarDialog"></ChangeAvatar>
        <ChangePassword :changePasswordDialogVis="changePasswordDialogVis" @changePasswordDialog="changePasswordDialog"></ChangePassword>
    </div>
</template>

<script>
import { logout } from '@/api/user/me';
import { getUser } from '@/api/util';

import { removeUserToken } from '@/utils/localStroageUtil';

import Menu from '@/components/user/menu/Menu.vue';
import ChangeName from './changeName.vue';
import ChangeAvatar from './changeAvatar.vue';
import ChangePassword from './changePassword.vue'
export default {
    name: 'home',
    components: {
        Menu, ChangeName, ChangeAvatar, ChangePassword
    },
    data() {
        return {
            user: {},
            changeNameDialogVis: false,
            changeAvatarDialogVis: false,
            changePasswordDialogVis: false
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
        },
        logout() {
            logout().then((res) => {
                if (res.data.code == 1) {
                    this.$message.success('登出成功')
                    removeUserToken()
                    this.$router.push('/login')
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        changeNameDialog(flag) {
            this.getUser()
            this.changeNameDialogVis = flag
        },
        changeAvatarDialog(flag) {
            this.getUser()
            this.changeAvatarDialogVis = flag
        },
        changePasswordDialog(flag){
            this.getUser()
            this.changePasswordDialogVis = flag
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

.avatarContainer {
    width: 100px;
    height: 100px;
    padding: 0px calc(50% - 50px) 0px calc(50% - 50px);
}

.avatar {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}

.nickname {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
}

.listsContainer {
    width: 100%;
    margin-top: 20px;
}

.listContainer {
    width: 100%;
}

.listItem {
    width: 100%;
    height: 40px;
    padding: 0px 10px 0px 10px;
    display: flex;
    justify-content: left;
    align-items: center;
}

.icon {
    width: 30px;
    height: 30px;
    float: left;
}

.item {
    height: 30px;
    padding-left: 10px;
    float: left;
    display: flex;
    align-items: center;
}

.footerContainer {
    height: 50px !important;
    background-color: aliceblue;
}
</style>