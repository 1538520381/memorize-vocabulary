<template>
    <el-dialog title="上传头像" width="80%" :visible="changeAvatarDialogVis" :close-on-click-modal="false"
        :before-close="closeDialog">
        <el-form>
            <el-form-item>
                <el-upload class="avatar-uploader" :show-file-list="false" :action="uploadUrl"
                    :headers="{ 'Authorization': user.userToken }" :before-upload="beforeAvatarUpload">
                    <img v-if="avatar" :src="avatar" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
import { getUserToken } from '@/utils/localStroageUtil'
export default {
    name: 'changeAvatar',
    props: [
        'avatar', 'changeAvatarDialogVis'
    ],
    data() {
        return {
            user: {
                avatar: this.avatar,
                userToken: getUserToken()
            },
            uploadUrl: `${process.env.VUE_APP_API_BASE_URL}/user/upload`,
        }
    },
    methods: {
        closeDialog() {
            this.user.avatar = this.avatar
            this.$emit('changeAvatarDialog', false)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    watch: {
        avatar: function () {
            this.user.avatar = this.avatar
        }
    }
}
</script>

<style scoped>
.avatar-uploader {
    display: flex;
    justify-content: center;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>