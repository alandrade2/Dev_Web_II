import React from 'react';
import { BrowserRouter , Link } from 'react-router-dom';
import './header.css';

export default function Header() {

return (
<BrowserRouter >
<div>
    <div className="menu">
        <nav className= "navMenu">
            <ul>
                <li><Link to href="/">Nosso Canal</Link> </li>
                <li><Link to="/cursos">Cursos</Link> </li>

                <li><Link to="#contatos">Contato</Link> </li>
                <li><Link to="#parceiros">Parceiros</Link> </li>
                <li><Link to="#missao"> Missão</Link> </li>
                <li><Link to="#sobre">Sobre</Link> </li>
            </ul>
        </nav>
    </div>
</div>
</BrowserRouter>
)
};