import { Login } from "./Login";
import { setupApi } from "./api";
import './Logout.css';

export function Logout() {
    const api = setupApi();
    api.post('/auth/logout').then((response) => {
        localStorage.setItem("access_token", null);
    });
    return (
        <div>
            <Login />
            <p id="logout-message">Has cerrado sesión</p>
        </div>
    );
};