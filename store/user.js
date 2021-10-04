
import userHttp from '~/http/UserHttp';

export const state = () => ({
    user: {},
    isLoggedIn: false,
    authToken: ''
});

export const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },

    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },

    setAuthToken(state, payload) {
        state.loggedInToken = payload;
    }
};

export const actions = {
    async attemptLogin({ commit, state }, payload) {   
        await new Promise((resolve, reject) => {
            userHttp.attemptLogin(payload).then(response => {

                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },

    async attemptSendOTP({ commit, state }, payload) {   
        await new Promise((resolve, reject) => {
            userHttp.attemptSendOTP(payload).then(response => {

                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },

    async attemptVerifyOTP({ commit, state }, payload) {   
        await new Promise((resolve, reject) => {
            userHttp.attemptVerifyOTP(payload).then(response => {

                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },

    async attemptOTPLogin({ commit }, payload) {   
        await new Promise((resolve, reject) => {
            userHttp.attemptOTPLogin(payload).then(response => {
                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },

    async attemptLogout({ commit }) {   
        await new Promise((resolve, reject) => {
            userHttp.attemptLogout().then(response => {

                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },

    async attemptRequestResetLink({ commit }, payload) {    
        await new Promise((resolve, reject) => {
            userHttp.attemptRequestResetLink(payload).then(response => {

                resolve(response);
            }, (error) => {
                reject(error)
            });
        });
    },
    
};