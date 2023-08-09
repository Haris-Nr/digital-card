import React from 'react'
// import pic from "./img.jpeg"
const Info = () => {
    return (
        <div className='info'>
            {/* <img src={pic} alt="" className='info--img'/> */} 
            <p className='info--img'> add pic</p>
            <h2 className='info--name'>Haris</h2>
            <p className='info--desi'>MERN STACK Developer</p>
            <small className='info--website'>www.Haris.com</small>
            <div className='btn'>
            <button className='info--mail'><a href="mailto:aarisnr@gmail.com" className='info--mail_email'>Email</a></button>

            <button className='lik'><a href="#" >Linkedin</a></button>
            </div>
        </div>
    )
}

export default Info
