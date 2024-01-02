

import CustomError from "../utils/CustomError.js";
import userPhoneNumberModel from "../models/user.phonenumber.model.js"
import userModel from "../models/userModel.js";

export const userPhoneNumberOTP = async (req,res,next) => {
    const { phoneNumber } = req.body;
    console.log(phoneNumber);
    const registeredPhoneNumber = await userModel.findOne({phoneNumber})
    console.log(registeredPhoneNumber);
    if(registeredPhoneNumber) return res.status(200).json({message:"user Alrady exist", success: true, data:registeredPhoneNumber})
    try {
        const newUserWithPhoneNumberOTP = userPhoneNumberModel({
            phoneNumber
        })
        const savedPhoneNumberOTP = await newUserWithPhoneNumberOTP.save();
        return res.status(200).json({message:"user Alrady exist", success: true, data : savedPhoneNumberOTP})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))
    }
}
