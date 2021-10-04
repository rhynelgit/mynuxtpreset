import Api from "~/apis/apiV1";

class UserHttp {

    // Access endpoints

    attemptRegister = payload => Api.post('/user/auth/register', payload);

    attemptLogin = payload => Api.post('/user/auth/login', payload);
    
    attemptSendOTP = payload => Api.post('/user/auth/send_otp', payload);

    attemptVerifyOTP = payload => Api.post('/user/auth/verify_otp', payload);
    
    attemptOTPLogin = payload => Api.post('/user/auth/otp_login', payload);

    attemptLogout = () => Api.post('/user/auth/logout');

    attemptRequestResetLink = payload => Api.post('/user/auth/request_link', payload);

    attemptSetNewPassword = payload => Api.post('/user/auth/reset_password', payload);

    //  Access endpoints
}

export default new UserHttp;