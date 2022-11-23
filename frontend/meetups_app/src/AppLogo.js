import { Link } from "react-router-dom";
import image from "./meetups_app_logo.png";

export function AppLogo({width}) {
    return (
        <div>
            <Link to="/">
                <img id="app-logo" src={image} width={width} alt=""/>
            </Link>
        </div>
    );
};