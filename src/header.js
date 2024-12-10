import './App.css'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <>

            <nav class="navbar navbar-expand-xl navbar-dark bg-gray-400 	">
                <a class="navbar-brand 	text-xl text-white font-light" href="#"> J . A L I S S A </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#colNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " style={{marginLeft:"44%"}} id="colNav">
                    <ul class="navbar-nav text-white gap-4">
                        <li class="nav-item">
                            <button onClick={() => navigate("/home")}>Home</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={() => navigate("/portfolio")}>Portfolio</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={() => navigate("/about")}>About</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={() => navigate("/books")}>Books</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={() => navigate("/clientalbums")}>ClientAlbums</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={() => navigate("/contact")}>Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    );
}

export default Header;
