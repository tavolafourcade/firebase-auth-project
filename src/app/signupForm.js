import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
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
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Email already in use')
    } else if(error.code === 'auth/invalid-email') {
      alert('Please enter a valid email address')
    } else if(error.code === 'auth/weak-password') {
      alert('Please enter a valid password')
    } else if (error.code) {
      alert('Something went wrong')
    }
  }
})