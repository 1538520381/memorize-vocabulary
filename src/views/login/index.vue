<template>
    <div class="container">
        <div class="mainContainer">
            <div class="titleContainer">
                10ve4Word5
            </div>
            <div class="loginContainer">
                登录
            </div>
            <div class="formContainer">
                <div class="inputContainer">
                    <div class="iconContainer">
                        <svg-icon class="icon" icon-class="account"></svg-icon>
                    </div>
                    <input class="input" placeholder="邮箱">
                </div>
                <div class="inputContainer">
                    <div class="iconContainer">
                        <svg-icon class="icon" icon-class="password"></svg-icon>
                    </div>
                    <input class="input" placeholder="密码" :key="passwordVis" type="password">
                </div>
            </div>
            <div class="buttonContainer">
                <el-button class="loginButton" type="primary">登录</el-button>
            </div>
            <div class="otherContainer">
                <div class="codeLogin">
                    验证码登录
                </div>
                <div class="signup">
                    注册
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            passwordVis: false
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

.loginContainer {
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

.buttonContainer {
    width: 100%;
    padding-top: 20px;
}

.loginButton {
    width: 100%;
    height: 45px;
    font-size: 18px;
}

.otherContainer{
    width: 100%;
    padding-top: 5px;
}

.codeLogin{
    color: rgb(64, 158, 256);
    float: left;
    font-size: 20px;
}

.signup{
    color: rgb(64, 158, 256);
    float: right;
    font-size: 20px;
}
</style>