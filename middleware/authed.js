export default function({ store, redirect }) {
    if (window.localStorage.getItem('isLoggedIn') != "true") {
        return redirect('/customer/login');
    }
}