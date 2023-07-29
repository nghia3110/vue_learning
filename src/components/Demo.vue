<template>
    <div>
        <input type="text" name="" id="code" ref="first">
        <input type="text" name="" id="">
        <input type="text" name="" id="">
    </div>
</template>

<script>
export default {
    name: 'Demo',
    data() {
        return {
            
        }
    },
    mounted() {
        this.$refs.first.focus();
    },
    methods: {
        
    }
}
</script>