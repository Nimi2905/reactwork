import React from 'react';
import logo from '../images/logo.svg'


export default function Navbar(props){

    const navStyle={
        backgroundColor:props.darkMode?"rgb(40, 39, 39)":"rgb(250, 250, 250)",
    }
    const lstyle={
        color:props.darkMode?"gray":"black",
    }
    const dstyle={
        color:props.darkMode?"white":"gray",
    }


    return (
        <nav className='nav' style={navStyle}>
        
            <img src={logo} alt='React' className='nav-logo'></img>
            <h3 className='logo-text'>ReactFacts</h3>
        

            <h5 className='divh4'>
                <span className='ld' style={lstyle}>Light</span>
                <div className="form-check form-switch tg">
                    <input className="form-check-input tg-sw" type="checkbox" role="switch" onChange={props.handleChange}/>
                </div>  
                <span className='da'style={dstyle}>Dark</span>
            </h5>
    
        </nav>
    )
}