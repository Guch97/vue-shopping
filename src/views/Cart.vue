<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>            
        </div>
        <cube-button @click='order' style="margin:10px 0;">下单</cube-button>
        <cube-button @click="claercart">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            // cartarr:[]
        }
    },
    computed:{
        ...mapState({
           cartarr:state=>state.cartarry 
        })
    },
    methods:{
      order(){
        this.$createDialog({
        type: 'alert',
        content: '下单成功',
        icon: 'cubeic-alert'
      }).show()
        this.$store.commit("clearcart")
      },
        //减少商品
     removeCart(index){
         this.$store.commit("cartremove",index)
     },
        //增加商品
        addCart(index){
            this.$store.commit('cartadd',index)

        },
        claercart(){
            this.$store.commit("clearcart")

        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodsright
            float  right
        i 
            font-size 18px
</style>