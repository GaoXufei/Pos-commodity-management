<template>
    <div class="toolbar">
        <ul>
            <li><a href="#/"><i class="icon iconfont icon-account"></i><p>个人</p></a></li>
            <li><a href="#/test"><i class="icon iconfont icon-renminbi1688"></i><p>收银</p></a></li>
            <li><a href="javascript:return false;"><i class="icon iconfont icon-wxbmingxingdianpu"></i><p>店铺</p></a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'toolbar'

}
</script>


<style scoped>
    .toolbar{
        position: fixed;
        top:0;
        left:0;
        width:60px;
        height:100%;
        background: #409EFF;
    }
    .toolbar ul li{
        padding: 10px 0;
        text-align: center;
        cursor: pointer;
    }
    .toolbar ul li:hover{
        background: rgb(20, 53, 85);
        
    }
    .toolbar ul li > a{
        display: block;
        width:100%;
        height:100%;
        position: relative;
        transition:all .3s;
    }
    .toolbar ul li:hover > a{
        padding-bottom: 20px;
        
    }
    .toolbar ul li > a p{
        color: #fff;
        font-size:12px;
        opacity: 0;
        transition:all .3s;
        /* box-sizing: border-box; */
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        
    }
    
    .toolbar ul li:hover p{
        opacity: 1;
    }
    .icon{
        color: #fff;
        font-size: 30px;
    }

</style>

