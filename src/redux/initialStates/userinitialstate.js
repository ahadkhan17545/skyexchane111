import Cookies from 'js-cookie'; // Import js-cookie correctly

const token = Cookies.get("token"); // Get the token from cookies

export const userinitialState = {
    isLoggedIn: false,
    loggedInType: "",
    userData: null,
    loading: false,
    error: null,
    token: token || null, // Use token or null if it's undefined
};
