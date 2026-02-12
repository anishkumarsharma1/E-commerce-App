import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Welcome to our online store, where we offer a wide range of high-quality products at competitive prices. We are committed to providing excellent customer service and ensuring that your shopping experience is enjoyable and hassle-free. Thank you for choosing us for your shopping needs!
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p> 
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr className='text-gray-300' />
            <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - Al Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer