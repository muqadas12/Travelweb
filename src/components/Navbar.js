import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Button from "./Button";
import "./Nav.css"
function Navbar(){
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);

    const handleMenuIcon=()=>setClick(!click);
    const closeMobilemenu=()=>setClick(false);

    const showbtn=()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }

    }
    useEffect(()=>{
        showbtn();

    },[])

    window.addEventListener('resize',showbtn)
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobilemenu}>
                        TRVL <i className="fas fa-plane-arrival"/>

                    </Link>
                    <div className="menu-icon" onClick={handleMenuIcon}>
                        <i className={click ? "fas fa-times" : "fas fa-align-justify"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobilemenu}>
                                Home
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobilemenu}>
                                Services
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobilemenu}>
                                Products
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobilemenu}>
                                Sign Up
                            </Link>
                            </li>

                      

                    </ul>
                    {button && <Button buttonStyles="btn--outline">Sign Up</Button>}



                    </div>

            </nav>

        </div>
    )
}
export default Navbar;