// import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import { app } from '../utils/firebase/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { createWorkerSchema } from '../utils/validationSchemas/validationSchemaForWorkerForm'
import {api} from '../utils/api'

// export default CreateAnAccount
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupForm from "../components/SignupForm"
import { useSelector } from 'react-redux'
import { useWorkerUpdateValues } from '../hooks/updateWorkerData'

// impor {useWorkerUpdateValues}

const UpdateAccount = () => {
  const updateInitailValues = useWorkerUpdateValues()
  // console.log(userShcema);
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [progressbar, setProgressBar] = useState(null)
  const [imageError, setImageError] = useState(false)
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const token = useSelector((state) => state.token)
  const {user} = useSelector((state) => state.user)
  // console.log(user);

  const uploadFile = (file, app) => {
    const storage = getStorage(app)
    const fileName = uuidv4() + file?.name
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgressBar(Math.round(progress))

        setImage(null)
      },
      error => {
        console.log(error)
        setImageError(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL)
          setImageUrl(downloadURL)
          setProgressBar(null)
        })
      }
    )
  }

  const updateUserAccount = async (values) => {
    try {
      values.profileImageURL = imageUrl
        const response = await api.put(`/api/v1/user/users`,values,{
          headers:{
            Authorization: `Bearer ${token?.isToken}`
          }
        })
        console.log(values);
        const data = response?.data?.data
        console.log(data);
        toast.error("Your profile update successfully",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate('/')
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message ,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
   }

  useEffect(() => {
    if(image){
      uploadFile(image, app)
    }
  }, [image])

  // USEREF HOOK FOR SHOWING HIDDEN INPUT FILE
  return (
    <>
      <SignupForm buttonTitle={"Update Your Account"} 
      formTitle={"Update your account"} progressbar={progressbar} 
      imageError={imageError} initailFormValue={updateInitailValues}
      formSchema={createWorkerSchema} submitFunction={updateUserAccount}
      userProfile={user?.profileImageURL}
    />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default UpdateAccount