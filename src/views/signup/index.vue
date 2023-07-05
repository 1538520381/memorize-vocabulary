<template>
    <div class="container">
        <div class="mainContainer">
            <div class="titleContainer">
                10ve4Word5
            </div>
            <div class="signupContainer">
                注册
            </div>
            <div class="formContainer">
                <div class="inputContainer">
                    <div class="iconContainer">
                        <svg-icon class="icon" icon-class="email"></svg-icon>
                    </div>
                    <input class="input" placeholder="邮箱" v-model="user.email">
                </div>
                <div class="inputContainer">
                    <div class="iconContainer">
                        <svg-icon class="icon" icon-class="password"></svg-icon>
                    </div>
                    <input class="input" placeholder="密码" v-model="user.password">
                </div>
                <div class="inputContainer">
                    <div class="iconContainer">
                        <svg-icon class="icon" icon-class="code"></svg-icon>
                    </div>
                    <input class="codeInput" placeholder="验证码" v-model="user.code">
                    <div class="sendCode" @click="sendCode()">
                        {{ timestamp == 0 ? '发送验证码' : timestamp + '秒后重试' }}
                    </div>
                </div>
            </div>
            <div class="buttonContainer">
                <el-button class="loginButton" type="primary">登录</el-button>
            </div>
            <div class="signup" @click="$router.push('/login')">
                已有账号？点击登录
            </div>
        </div>
    </div>
</template>

<script>
import { isEmail } from '@/utils/validate'
export default {
    name: 'signup',
    data() {
        return {
            user: {
                email: '',
                password: '',
                code: ''
            },

            timestamp: 0,
        }
    },
    methods: {
        sendCode() {
            if (this.timestamp == 0) {
                if (isEmail(this.user.email)) {
                    this.timestamp = 60
                    var _this = this
                    var clock = setInterval(function () {
                        _this.timestamp--
                        if (_this.timestamp == 0) {
                            clearInterval(clock)
                        }
                    }, 1000);
                } else {
                    this.$message.error('邮箱不合法');
                }
            } else {
                this.$message.error('请在' + this.timestamp + '秒后重试')
            }
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
    align-items: center;
    background-color: antiquewhite;
}

.mainContainer {
    width: 80%;
    height: 600px;
}

.titleContainer {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    font-weight: bold;
}

.signupContainer {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
}

.inputContainer {
    width: 100%;
    height: 50px;
    margin-top: 30px;
    display: flex;
    background-color: rgb(243, 222, 194);
}

.iconContainer {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 28px;
    height: 28px;
    fill: rgb(12, 23, 34);
}

.input {
    height: 100%;
    width: calc(100% - 50px);
    padding: 0px;
    border: none;
    outline: none;
    background-color: rgb(243, 222, 194);
    font-size: 18px;
}

.codeInput {
    width: calc(100% - 160px);
    height: 100%;
    padding: 0px;
    border: none;
    outline: none;
    background-color: rgb(243, 222, 194);
    font-size: 18px;
}

.sendCode {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: rgb(64, 158, 255);
}

.buttonContainer {
    width: 100%;
    padding-top: 20px;
}

.loginButton {
    width: 100%;
    height: 45px;
    font-size: 18px;
}

.signup {
    color: rgb(64, 158, 256);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
</style>