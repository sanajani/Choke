import { useState, useEffect } from 'react'
import { app } from '../utils/firebase/firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { setUser } from '../redux/features/userDataSlice'
import { ToastContainer, toast } from 'react-toastify'

import { v4 as uuidv4 } from 'uuid'
import { initialWorkerAccountValues, createWorkerSchema } from '../utils/validationSchemas/validationSchemaForWorkerForm'
import {api} from '../utils/api'
import { useDispatch } from 'react-redux'

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null)
  console.log(image);
  const [imageUrl, setImageUrl] = useState('')
  const [progressbar, setProgressBar] = useState(null)
  const [imageError, setImageError] = useState(false)

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


  const createUserAccount = async (values) => {
    try {
         values.profileImageURL = imageUrl
        const response = await api.post(`/api/v1/user/signup`,values)
        const data = response?.data?.data
        console.log(data);
        dispatch(setUser(data))
        navigate('/signin')
        toast.success("Account created Successfully",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

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

  return (
    <>
    <SignupForm
    image={image}
    buttonTitle={"Sign up"}
    formTitle={"Singup Form"}
    progressbar={progressbar}
    imageError={imageError}
    initailFormValue={initialWorkerAccountValues}
    formSchema={createWorkerSchema}
    submitFunction={createUserAccount}
    setImage={setImage}
    imageurl={imageUrl}
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

export default Signup