import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const signinEmail = signInForm['signin-email'].value;
  const signinPassword = signInForm['signin-password'].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, signinEmail, signinPassword)
    console.log('credentials',credentials)

    // Close the signin modal
    const signinModal = document.querySelector('#signinModal')
    const modal = bootstrap.Modal.getInstance(signinModal)
    modal.hide()

    showMessage(`You have successfully signed in ${credentials.user.email}`)
  } catch (error) {
    if (error.code === 'auth/wrong-password'){
      showMessage('Wrong password', "error")
    } else if (error.code === 'auth/user-not-found'){
      showMessage('User not found', "error")
    } else {
      showMessage(error.message, "error")
    }
  }
})