<template>
    <div class="menu">
        <div class="menuItem" @click="goTo(1)">
            <div class="iconContainer">
                <svg-icon :class="current == 1 ? 'currentIcon' : 'icon'" icon-class="home"></svg-icon>
            </div>
            <div :class="current == 1 ? 'currentLabelContainer' : 'labelContainer'">
                主页
            </div>
        </div>
        <div class="menuItem">
            <div class="iconContainer" @click="goTo(2)">
                <svg-icon :class="current == 2 ? 'currentIcon' : 'icon'" icon-class="score"></svg-icon>
            </div>
            <div :class="current == 2 ? 'currentLabelContainer' : 'labelContainer'">
                成绩
            </div>
        </div>
        <div class="menuItem">
            <div class="iconContainer" @click="goTo(3)">
                <svg-icon :class="current == 3 ? 'currentIcon' : 'icon'" icon-class="me"></svg-icon>
            </div>
            <div :class="current == 3 ? 'currentLabelContainer' : 'labelContainer'">
                我的
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: [
        'current'
    ],
    methods: {
        goTo(id) {
            if (id != this.current) {
                if (id == 1) {
                    this.$router.push('/home')
                } else if (id == 2) {
                    this.$router.push('/score')
                } else {
                    this.$router.push('/me')
                }
            }
        }
    }
}
</script>

<style scoped>
.menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
}

.menuItem {
    width: 30%;
    height: 100%;
    margin: 0px 0px 0px 0px;
}

.iconContainer {
    width: 20px;
    height: calc(100% - 10px);
    margin: 5px;
    float: left;
    display: flex;
    align-items: center;
}

.icon {
    width: 20px;
    height: 20px;
}

.currentIcon {
    width: 30px;
    height: 30px;
    fill: rgb(27, 93, 206);
}

.labelContainer {
    width: calc(100% - 30px);
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    font-size: 16px;
}

.currentLabelContainer {
    width: calc(100% - 30px);
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: rgb(27, 93, 206);
}
</style>