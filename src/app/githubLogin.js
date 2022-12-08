import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { showMessage } from "./showMessage.js"
import { auth } from './firebase.js'

const githubButton = document.querySelector('#githubSignIn')

githubButton.addEventListener('click', async () => {
  const provider = new GithubAuthProvider()

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log('CREDENTIALS', credentials)

    // Close the signin modal
    const signinModal = document.querySelector('#signinModal')
    const modal = bootstrap.Modal.getInstance(signinModal)
    modal.hide()

    showMessage(`You have successfully signed in ${credentials.user.displayName}`)

  } catch (error) {
    console.log(error)
  }
})