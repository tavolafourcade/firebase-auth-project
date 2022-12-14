import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'
import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'
import './app/googleLogin.js'
import './app/fbLogin.js'
import './app/githubLogin.js'

onAuthStateChanged(auth, async (user) => {
if(user){
  loginCheck(user)
} else {
  loginCheck(user)
}
})