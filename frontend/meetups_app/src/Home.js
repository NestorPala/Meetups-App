import { MainNavbar } from "./MainNavbar";
import "./Home.css";

export function Home() {
    return (
        <div>
            <MainNavbar />
            <div id="content">
                <h1>Mis eventos próximos</h1>
            </div>
        </div>
    );
};