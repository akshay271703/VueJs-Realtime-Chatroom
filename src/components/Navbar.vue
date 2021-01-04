<template>
    <nav>
        <div>
        <p>{{ user.displayName }}</p>
        <p class="email">{{ user.email }}</p>
        </div>
        <button @click="signOutUser">Logout</button>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '../composables/logout'
import getUser from '../composables/User'

export default {
    setup(){
        const { logout , error } = useLogout()
        const router = useRouter()
        const { user } = getUser()
        const signOutUser = async () =>{
            await logout()
            if(!error.value){
               router.push({ name : 'Welcome' } )
            }
        }

        return { signOutUser , user }
    }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>