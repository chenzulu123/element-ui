<template>
    <div class="content">
        <div class="logo">
            <img src="../assets/logo.png" alt="Vue logo 图片">
        </div>
        <h4>{{$t('content.title')}}</h4>
        <div class="content">
            {{$t('content.content')}}
            <br/>
            <p><span>{{$t('content.label')}}:</span><a href="https://github.com/chenzulu123/element-ui/" target="_blank">https://github.com/chenzulu123/element-ui/</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.content{
    padding-top:20px;
}
.content h4{
    margin-bottom:20px;
}
.content .content p{
    margin-top: 20px;
    margin-bottom: 30px;
}
.content .content p span{
    margin-right: 5px;
}
</style>