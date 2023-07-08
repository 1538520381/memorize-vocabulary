<template>
    <div class="container">
        <el-container>
            <el-main class="mainContainer">
                <div class="avatarContainer">
                    <div class="avatar">
                        {{ user.avatar }}
                    </div>
                </div>
                <div class="nickname">
                    {{ user.nickname }}
                </div>
                <div class="logoutButtonContainer">
                    <el-button class="logoutButton" type="primary" @click="logout()">退出登录</el-button>
                </div>
            </el-main>
            <el-footer class="footerContainer">
                <Menu :current="2"></Menu>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { logout } from '@/api/user/me';
import { getUser } from '@/api/util';
import Menu from '@/components/user/menu/Menu.vue';
import { removeUserToken } from '@/utils/localStroageUtil';
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

.logoutButtonContainer {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.logoutButton {
    width: 100px;
}

.footerContainer {
    height: 50px !important;
    background-color: aliceblue;
}
</style>