<template>
    <div>
        <form @submit.prevent = "handleSignUp">
            <input type="text" required placeholder="display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{ error }}</div>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import  useSignup from '../composables/signup'
import { useRouter } from 'vue-router'
export default {
    setup(props , context){

        const { error , signup } = useSignup()
        const router = useRouter()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSignUp = async () => {
            await signup(email.value , password.value , displayName.value)
            if(!error.value){
                context.emit('signup')
            }
        }

        return { displayName , email , password , handleSignUp  , error}
    }
}
</script>

<style>

</style>