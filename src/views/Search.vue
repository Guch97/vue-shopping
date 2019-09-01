<template>
  <div id="box">
        <input type="text" name="search" placeholder="请输入关键字"><i class="fas fa-search"></i>
        <div id="search">搜索</div>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    #box
        width 380px;
        margin 30px auto;
        font-size 14px
        font-family 'Microsoft YaHei'
    input
        width 260px
        border 1px solid #e2e2e2
        height 30px
        float left
        background-size 25px
        background-position 5px center
        padding 0 0 0 40px
         background-image: url(../assets/1.png)
        background-repeat: no-repeat
      #search
        width 78px
        height 32px
        float right
        background black
        color white
        text-align  center
        line-height 32px
        cursor pointer


</style>