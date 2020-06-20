<template>
    <div class="box">
        <div class="message">
            <div class="title">
                ⏺ {{title}}
            </div>
            <div class="cost">
                银卡价值{{cost}}元
            </div>
            <div class="time">
                有效时间:{{time}}
            </div>
        </div>
        <div class="toUse">
            去使用
        </div>
    </div>
</template>

<script>
export default {
    name:"cardist",
    data() {
        return {
            
        }
    },
    props:["title","cost","time"]
}
</script>

<style scoped>
.box{
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: rgba(255, 246, 241, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}
.message{
    width: 73%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.cost{
    white-space: nowrap;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #DC7153;
}
.time,.title{
    color:#666666;
    font-size: 14px;
}
.toUse{
    width: 27%;
    height: 100%;
    border-left: 1px dashed #000;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>