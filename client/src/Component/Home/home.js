import React, { Component } from 'react';
import './style.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='wrapper'>
                <section className='mainHome'>
                    <div className='top-container'>
                        <header className='showcase'>
                            <h1>Mining Bitcoin Farm</h1>
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, </p>
                            <a href='' className='btn'>Read More</a>
                        </header>
                        <div className='top-box top-box-a'>
                            <h1>Membership</h1>
                            <p className='price'>$150/mo</p>
                            <a href='' className='btn'>Buy Now</a>
                        </div>
                        <div className='top-box top-box-b'>
                            <h1>Pro Membership</h1>
                            <p className='price'>$350/mo</p>
                            <a href='' className='btn'>Buy Now</a>
                        </div>
                    </div>
                </section>
                <section className='boxes'>
                    <div className='box'>
                        <img src={require('../../pic/login.png')}/>
                        <h3>Open Account</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                    </div>
                    <div className='box'>
                        <img style={{width: '40px'}} src={require('../../pic/money (2).png')}/>
                        <h3>Deposit</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                    </div>
                    <div className='box'>
                        <img style={{width: '40px'}} src={require('../../pic/3372240.jpg')}/>
                        <h3>Relax </h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                    </div>
                    <div className='box'>
                        <img style={{width: '40px'}} src={require('../../pic/money (1).png')}/>
                        <h3>Payout</h3>
                        <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
                    </div>
                </section>
                <section className='info'>
                    <img src={require('../../pic/binary-2904980_1920.jpg')}/>
                    <div className='infoText'>
                        <h1>Mining Zone secure</h1>
                        <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with approp</p>
                        <a href='' className='btn'>Learn More</a>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Home;