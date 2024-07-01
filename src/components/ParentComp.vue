<template>
    <div class='parent container'>
        <Child @message-sent='updateMessage' />
        <h1 class='text-center my-3'>Componente Padre</h1>
        <main>
            <label for='' class='form-label'>Texto recibido: {{ message }}</label>
            <p></p>
        </main>
    </div>
</template>

<script>
import Child from '@/components/ChildComp.vue'
export default {
    name: 'ParentComp',
    data: function () {
        return {
            message: ''
        }
    },
    props: {
    },
    methods: {
        updateMessage(message) {
            this.message = message;
        }
    },
    components: {
        Child
    },
}
</script>

<style scoped lang='scss'>
</style>