import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form');

console.log(signupForm)
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  console.log(email, password)

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()

    showMessage(`You have successfully signed up ${userCredentials.user.email}`)

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage('Email already in use', "error")
    } else if(error.code === 'auth/invalid-email') {
      showMessage('Invalid email', "error")
    } else if(error.code === 'auth/weak-password') {
      showMessage('Password already in use', "error")
    } else if (error.code) {
      showMessage(error.message, "error")
    }
  }
})