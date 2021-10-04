export default function({ store, redirect}) {
    if (window.localStorage.getItem('authToken')) {
        return redirect('/');
    }
}