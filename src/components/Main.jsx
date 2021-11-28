import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { SidebarData } from "../components/SidebarData";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown, Navbar, Nav, Container  } from 'react-bootstrap';
export const Header = () => {

    const [categorias,getCategorias] = useState([]);
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <Navbar variant="ligth" bg="ligth" expand="lg">
  <Container fluid>
  <Link to='/' className="navbar-brand">
                    <img src={logo}></img>
                </Link>
    <Navbar.Toggle aria-controls="navbar-yellow-example" />
    <Navbar.Collapse id="navbar-yellow-example">
      <Nav>
      <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav navbar-rigth">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    {/*    { categorias.map((item,index) => (
                          <li className="nav-item">
                              <Link to={"/categoria/"+item.id} className="nav-link">{item.categoria}</Link>
                            </li>  
                        ))}
                    */}   
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-link">Sobre</Link>
                        </li>
                        
                     {/*  <div class="input-group rounded">
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaIcons.FaUser/>
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="">Login</a>
                                    <a class="dropdown-item" href="">Logoof</a>
                                    
                                </div>
                            </li>
                       
                        </div>
                    */}   
                    </ul>
            </div>    
        <NavDropdown 
          id="nav-dropdown-dark-example"
          title="Login"
          menuVariant="yellow"
        >  
          <NavDropdown.Item href="">Login</NavDropdown.Item>
          <NavDropdown.Item href="">Novo Úsuario</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          
           <IconContext.Provider value={{ color: 'rgb(255, 208, 0)'}}> 
            <div className="navbar2">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaStream onClick={showSidebar} />
                </Link> 
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
        
    )
}


export const Footer = () => {
    return (
        <>
    <footer className="footer">
        <div class="mt-3 pt-3 pb-1 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-11 about-company">
                        <Link to='/' className="navbar-brand">
                            <img src={logo}></img>
                        </Link>
                        <p class="pr-5 text-white-50"> Hackathon é uma empresa criada em 2021, para fazer a listagem produtos que foram cadastrados através de lojas diversas </p>
                        <p><a href="#" ><FaIcons.FaFacebook /></a><a href="#"><FaIcons.FaLinkedin /></a></p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                            <li> <FaIcons.FaWhatsapp size="40"  /> <a href="#"> 44 984334432 </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Localização</h4>
                        <p>Faculdade alfa. </p>
                        <p class="mb-0"><i class="fa fa-phone mr-3"></i>(44) 3636-3636</p>
                        <p><i class="fa fa-envelope-o mr-3"></i>Hackathon21@gmail.com</p>
                    </div>
                    </div>
                    <div class="row mt-5">
                    <div class="col copyright">
                        <p class=""><small class="text-white-50">© 2021. Todos os direitos reservados.</small></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export const formataValor = (valor) => {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}