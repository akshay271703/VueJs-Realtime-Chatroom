import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref('')

const signup = async (email, password, displayName) =>{
    error.value = null
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error('Cannot sign up the user')
        }
        res.user.updateProfile({ displayName : displayName})
        error.value = null
        return res
    }catch(Err){
        error.value = Err.message
    }
}

const useSignup = () => {
    return { error , signup } 
}

export default  useSignup 