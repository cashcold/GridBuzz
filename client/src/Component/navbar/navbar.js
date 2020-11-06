import React, { Component } from 'react';
import './style.css'
import  'animate.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const ToggleBtn = ()=>{
            const toggleBtn = document.querySelector('.toogleBtn')
            const links = document.querySelector('.nav-links')

            toggleBtn.addEventListener('click',()=>{
                if(links.style.display === 'none'){
                    links.style.display= 'block';
                }
                else{
                    links.style.display='none';
                }
            })
            
        }
        ToggleBtn()
    }
    render() { 
        return ( 
            <div className='mainNavbar '>
                <div className='main-nav'>
                    <div className='toogleBtn'>
                        <div className='line1'></div>
                        <div className='line1'></div>
                        <div className='line1'></div>
                    </div>
                    <nav className='nav-links animate__animated animate__zoomInDown animate__slower'>
                        <ul >
                            <li><a href=''>HOME</a></li>
                            <li><a href=''>SERVICES</a></li>
                            <li><a href=''>ABOUT</a></li>
                            <li><a href=''>JOIN-US</a></li>
                            <li><a href=''>CONTACT-US</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
         );
    }
}
 
export default Navbar;