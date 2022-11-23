import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setupApi } from './api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { AppLogo } from "./AppLogo";

const api = setupApi();

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        api.post('/auth/login', {
            email: email,
            password: password
        })
        .then((response) => {
            localStorage.setItem("access_token", response.data.token);
            navigate("/home");
        })
        .catch(() => navigate("/login"));
    };

    return (
        <div id="login-form">
            <AppLogo width={100}/>
            <p>Ingresá al sitio</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="x@x.com"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                    <Form.Text className="text-muted">
                        Nunca compartiremos tus datos personales con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="*******"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        </div>
    );
};