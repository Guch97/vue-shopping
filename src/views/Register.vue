<template>
    <div>
        <img class="headerimg" src="https://m.360buyimg.com/babel/jfs/t1/96574/33/9087/110807/5e0b1656E5f1e5354/328ad41f6cacb7a6.jpg!q70.jpg.webp" alt="">
       <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
       </cube-form>
       <cube-popup type="my-popup" ref="myPopup">注册成功</cube-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    //用户名配置
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{
                            //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15,
                        },
                        trigger: 'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'用户名不能少于3个字符',
                            max:'用户名不能大于15个字符'
                        }
                    },
                    //密码配置
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true,
                        },
                        trigger:'blur',
                    },
                    {
                        type:'submit',
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault()
            this.$http.get('/api/register',{params:this.model}).then(res=>{
              if(res.success==true){
                this.$store.state.token='admin',
              localStorage.setItem('token',JSON.stringify(this.$store.state.token))
                  this.$refs.myPopup.show()
                    setTimeout(()=>{
                         this.$refs.myPopup.hide()
                         this.$router.push('/botnav/index')
                  },2000)
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height  150px
        width  100%
</style>


