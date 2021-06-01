export const actionAuth = (userInfo) => {

    return {
        type: "USER_LOGIN",
        payload: userInfo,
    }
};