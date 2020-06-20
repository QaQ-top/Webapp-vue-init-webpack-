<template>
    <div class="header stencil">
        <div class="nav">
            <div>返回</div>
            <div>关闭</div>
        </div>
        <div class="title">{{title}}</div>
        <div class="null"></div>
    </div>
</template>

<script>
export default {
    name:"myHeader",
    data() {
        return {
            
        }
    },
    props:['title']
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 45px;
        background-color: rgba(70, 76, 91, 1);
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        position: fixed;
        top:0;
        left:0;
    }
    .nav{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        flex: 3;
        padding: 0 10px;
    }
    .null{
        flex: 1;
    }
</style>