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
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error);
    });
  }

  return (
  <div className='w-full h-screen'>
    <form onSubmit={sendOTPToUser}
    className='mx-auto flex-col gap-4 rounded-xl mt-7 h-60 flex justify-center items-center md:mt-12 max-w-[400px] p-3 shadow-2xl border-t-2'>
      <h1 className='font-semibold md:font-bold text-lg md:text-xl text-right'>شماره تماسی ک پیش تان موجود است را وارد کنید</h1>
        <input 
          className='outline-none block rounded-md border-2 w-full focus:border-blue-500 text-lg md:text-xl p-1'
          placeholder='+93 0705669499'
          type="text" 
          onChange={(e) => setPhoneNumber(e.target.value)} />
        <button
        className='border-2 hover:border-blue-500 hover:text-blue-800 transition-all mt-3 px-12 py-2 rounded-md font-semibold md:font-bold'
        type='submit'
        >Submit</button>
    </form>
    <div id="recaptchaContainer"></div>
  </div>
  )
}
export default PhoneNumberVerifier
