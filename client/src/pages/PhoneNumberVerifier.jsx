import { RecaptchaVerifier, signInWithPhoneNumber  } from 'firebase/auth'
import { authentication } from '../config/firebase.config'
import { useState } from 'react'

const PhoneNumberVerifier = () => {
  const [phoneNumber,setPhoneNumber] = useState('')
  // recaptcha verifier function
  const recapthcaVerifierFunc = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(authentication, 'recaptchaContainer', {
      size: 'invisible',
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      callback: response => console.log(response)
    }, authentication)
  }
  // end of recaptcha verifier function

  // after user entered his number and called a function
  const sendOTPToUser = () => {
    recapthcaVerifierFunc()
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log(error);
    });
  }

  return (
  <div>
    <form onSubmit={sendOTPToUser} className='max-w-[400px] p-3 shadow-2xl border-t-2'>
        <input 
          className='border-2 focus:border-blue-500 text-lg md:text-xl p-1'
          placeholder='لطفا شماره تماس خود را وارد کنید'
          type="text" 
          onChange={(e) => setPhoneNumber(e.target.value)} />
        <button type='submit'>Submit</button>
    </form>
    <div id="recaptchaContainer"></div>
  </div>
  )
}
export default PhoneNumberVerifier