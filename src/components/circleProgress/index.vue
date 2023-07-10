
<template>
    <div>
        <canvas width="130" height="130" ref="canvas"></canvas>
    </div>
</template>
<script>
export default {
    props: {
        progress: { type: String }
    },
    mounted() {
        var ctx = this.$refs.canvas.getContext("2d");
        ctx.beginPath();
        var x = (this.progress / 100) * Math.PI * 2;

        ctx.arc(65, 65, 60, 0, 2 * Math.PI, false);

        if (x <= 2) {
            ctx.strokeStyle = "rgb(32,160,255)";
        }
        if (x > 2 && x <= 4) {
            ctx.strokeStyle = "rgb(255,73,73)";
        }
        if (x > 4 && x <= 6) {
            ctx.strokeStyle = "rgb(230,162,60)";
        }
        if (x > 6) {
            ctx.strokeStyle = "rgb(19,206,102)";
        }
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();

        ctx.arc(65, 65, 60, -Math.PI / 2, 3 * Math.PI / 2 + x, true);
        ctx.strokeStyle = "rgb(229,233,242)";

        ctx.lineWidth = 5;
        ctx.stroke();
    }
};
</script>
<style scoped>
div {
    width: 130px;
    height: 130px;
}

canvas {
    margin: 10px auto;
}
</style>