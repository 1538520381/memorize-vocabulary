<template>
    <el-dialog title="修改姓名" width="80%" :visible="changeNameDialogVis" :close-on-click-modal="false"
        :before-close="closeDialog">
        <el-form>
            <el-form-item>
                <el-input v-model="user.nickname"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="changeName">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import { changeName } from '@/api/user/me'

export default {
    name: 'changeName',
    props: [
        'nickname', 'changeNameDialogVis'
    ],
    data() {
        return {
            user: {
                nickname: this.nickname
            }
        }
    },
    methods: {
        closeDialog() {
            this.user.nickname = this.nickname
            this.$emit('changeNameDialog', false)
        },
        changeName(){
            changeName(this.user.nickname).then((res)=>{
                if(res.data.code==1){
                    this.$message.success('修改成功')
                    this.closeDialog()
                }else{
                    this.$message.error(res.data.msg)
                }
            })
        }
    },
    watch: {
        nickname: function () {
            this.user.nickname = this.nickname
        }
    }
}
</script>

<style scoped></style>