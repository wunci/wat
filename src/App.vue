<template>
    <div id="app">
        <button @click="showToast('success')">success</button>
        <button @click="showToast('fail')">fail</button>
        <button @click="showDir('bottom')">底部出来</button>
        <button @click="showDir('top')">顶部出来</button>
        <button @click="loading('circular')">circular</button>
        <button @click="loading('spinner')">spinner</button>
        <button @click="closeAll">关闭所有</button>
        <button @click="alert">alert</button>
        <button @click="confirm">confirm</button>
    </div>
</template>

<script>

export default {
    name: "app",
    components: {

    },
    mounted() {},
    methods: {
        showToast(type = "success") {
            this.$toast({
                text: "1231",
                mask: true,
                disabledClick:false,
                type,
                // direction:'bottom',
                duration: 0,
                zIndex:3000,
                onClose: (val) => {
                    console.log(val.disabledClick);
                }
            });
        },
        closeAll() {
            this.$toast.closeAll();
        },
        showDir(direction){
            this.$toast[direction]('123');
        },
        loading(loading){
            this.$toast({
                  mask: true,
                //   disabledClick:true,
                type:'loading',
                loadingType:loading,
                duration:0,
                onClose: (val) => {
                    console.log(val.text);
                }
            });
        },
        alert(){
            this.$dialog.alert({content:'ghghgg',title:'体是是是',disabledClick:false,zIndex:3000}).then(res=>{
                this.$toast.top('点击了确定了')
            }).catch(res=>{
                
            })
        },
        confirm(){
            this.$dialog.confirm({content:'ghghgg',title:'体是是是',disabledClick:false}).then(res=>{
                this.$toast('点击了确定了点击了确定了点击了确定了点击了确定了点击了确定了点击了确定了点击了确定了')                
            }).catch(res=>{
                this.$toast.top('点击了取消了')                
            })
        }
    }
};
</script>

<style lang="less">
@import url('./style/common.less');
button{
    margin: 20px
}
</style>
