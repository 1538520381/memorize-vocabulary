<template>
    <el-dialog title="修改密码" width="80%" :visible="changePasswordDialogVis" :close-on-click-modal="false"
        :before-close="closeDialog">
        <el-form>
            <el-form-item label="新密码">
                <el-input class="input" type="password" placeholder="请输入新密码" v-model="user.password"
                    autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input class="input-with-select input" placeholder="请输入验证码" v-model="user.code">
                    <el-button slot="append" @click="sendCode()">{{ timestamp == 0 ? '发送验证码' : timestamp + '秒后重试'
                    }}</el-button>
                </el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="changePassword">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import { isExist } from '@/utils/validate'
import { changePassword } from '@/api/user/me'

export default {
    name: 'changeAvatar',
    props: [
        'changePasswordDialogVis'
    ],
    data() {
        return {
            user: {
                password: '',
                code: ''
            },
            timestamp: 0,
        }
    },
    methods: {
        closeDialog() {
            this.user.avatar = this.avatar
            this.$emit('changeAvatarDialog', false)
        },
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
        closeDialog() {
            this.user.password = ''
            this.user.code = ''
            this.$emit('changePasswordDialog', false)
        },
        changePassword() {
            if (isExist(this.user.password)) {
                if (isExist(this.user.code)) {
                    changePassword(this.user.password, this.user.code).then((res) => {
                        if (res.data.code == 1) {
                            this.$message.success('修改成功')
                            this.closeDialog(false)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                } else {
                    this.$message.error('请先输入验证码')
                }
            } else {
                this.$message.success('请先输入新密码')
            }
        }
    }
}
</script>

<style scoped>
.input {
    width: 80%;
}
</style>