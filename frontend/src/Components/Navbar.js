import logo from '../images/UnB.png';

const Navbar = ({ show }) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: "#011627", minheight: '8vh' }}>
                <div class="w-100 d-flex mx-2 align-items-center">
                    <a class="navbar-brand px-0" href="/"
                    ><img
                            id="MDB-logo"
                            src={logo}
                            alt="MDB Logo"
                            class="rounded"
                            draggable="false"
                            height="40"

                        /></a>
                    <div className="container-fluid px-0">
                        <div className="px-0" id="">
                            <ul className="nav px-0 align-items-center mt-1" style={{ color: "white", fontSize: '1rem' }}>
                                <li className="nav-item">
                                    <a style={{ color: "white" }} className="nav-link active" aria-current="page" href="/">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "white" }} className="nav-link" href="/dados">Dados</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "white" }} className="nav-link" href="/sobre">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "white" }} className="nav-link" href="/creditos">Créditos</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar;