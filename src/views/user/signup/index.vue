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
                    <input class="input" type="password" placeholder="密码" v-model="user.password">
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
                <el-button class="loginButton" type="primary" @click="signup()">注册</el-button>
            </div>
            <div class="signup" @click="$router.push('/login')">
                已有账号？点击登录
            </div>
        </div>
    </div>
</template>

<script>
import { isEmail, isExist } from '@/utils/validate'
import { setUserToken, setMemorizedWords } from '@/utils/localStroageUtil'

import { sendCode } from '@/api/util'
import { signup } from '@/api/user/signup'

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
        //发送验证码
        sendCode() {
            if (this.timestamp == 0) {
                console.log(this.user.email)
                if (isEmail(this.user.email)) {
                    this.timestamp = 60
                    var _this = this
                    var clock = setInterval(function () {
                        _this.timestamp--
                        if (_this.timestamp == 0) {
                            clearInterval(clock)
                        }
                    }, 1000)
                    sendCode(this.user.email).then((res) => {
                        if (res.data.code == 1) {

                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                } else {
                    this.$message.error('邮箱格式错误!');
                }
            } else {
                this.$message.error('请在' + this.timestamp + '秒后重试')
            }
        },
        //注册
        signup() {
            if (isEmail(this.user.email)) {
                if (this.user.password.length >= 8) {
                    if (isExist(this.user.code)) {
                        signup(this.user.email,this.user.password,this.user.code).then((res) => {
                            if (res.data.code == 1) {
                                // this.$router.push('/home')
                                // setUserToken(res.data.data.token)
                                // setMemorizedWords(res.data.data.userStudy)
                                this.$router.push('/login')
                            } else {
                                this.$message.error(res.data.msg)
                            }
                        })
                    } else {
                        this.$message.error('请输入验证码')
                    }
                } else {
                    this.$message.error('密码位数请大于等于8位')
                }
            } else {
                this.$message.error('邮箱格式错误!')
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