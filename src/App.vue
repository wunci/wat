<template>
    <div id="app">
        <h3>toast</h3>
        <button @click="showToast('success','success')">success</button>
        <button @click="showToast('fail','fail')">fail</button>
        <button @click="showDirection('bottom','I\'m from bottom')">bottom</button>
        <button @click="showDirection('top','I\'m from top')">top</button>
        <button @click="loading('circular','loading...')">loading-circular</button>
        <button @click="loading('spinner','loading...')">loading-spinner</button>
        <button @click="closeAll">closeAll</button>
        <h3>dialog</h3>
        <button @click="alert">alert</button>
        <button @click="confirm">confirm</button>
    </div>
</template>

<script>

export default {
    name: "app",
    mounted() {},
    methods: {
        showToast(type = "success",text) {
            this.$toast({
                text,
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
        showDirection(direction,text){
            this.$toast[direction](text);
        },
        loading(loading,text){
            this.$toast({
                text,
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
            this.$dialog.alert({
                content: 'This is content',
                title: 'Tips',
                disabledClick: false,
                zIndex: 3000,
                cancelBtnText:'cancel',
                confirmBtnText:'confirm',
            }).then(res=>{
                this.$toast.top('click confirm')
            }).catch(res=>{
                this.$toast.top('click cancel')
            })
        },
        confirm(){
            this.$dialog.confirm({
                content:'This is content',
                title:'Tips',
                disabledClick:true,
                cancelBtnText:'cancel',
                confirmBtnText:'confirm',
            }).then(res=>{
                this.$toast('click confirm')                
            }).catch(res=>{
                this.$toast.top('click cancel')                
            })
        }
    }
};
</script>

<style scope lang="less">
@import './style/common.less';
#app{
    h3{
        border-left: 5px solid #3cc51f;
        padding-left: 15px;
        margin: 10px ;
    }
    button{
        padding: 0 20px;
        height: 30px;
        background: #fff;
        border: none;
        margin: 10px;
        border-radius: 10px;
        color: #333;
        border:1px solid #ccc;
        outline: none;
        &:active{
            background: #ccc;
        }
    }
}
</style>
