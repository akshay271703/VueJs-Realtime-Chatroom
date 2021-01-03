<template>
    <div>
        <form @submit.prevent = "handleSignUp">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{ error }}</div>
            <button>Log In</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/login'
export default {
    setup(props, context){
        const email = ref('')
        const password = ref('')

        const { error , login } = useLogin()

        const handleSignUp = async () => {
            await login(email.value , password. value)
            if(!error.value){
                context.emit('login')
            }
        }

        return { email , password , handleSignUp , error }
    }
}
</script>

<style>

</style>