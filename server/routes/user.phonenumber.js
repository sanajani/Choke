import express from 'express'
import {userPhoneNumberOTP,getAllPhoneNumbers} from '../controllers/user.phonenumber.controller.js'
const router = express.Router();
// /api/v1/otp/phone
router.post('/phone', userPhoneNumberOTP)
// /api/v1/otp/users
router.get('/users', getAllPhoneNumbers)

export default router