import React from 'react';
import {TiSocialFacebookCircular, TiSocialInstagram, TiSocialLinkedin} from 'react-icons/ti'
function Footer(){

    return (
        <div className='px-4 text-[13px] mb-2'>
            <div>
                <div className='flex items-center gap-2 mb-6'>
                    <TiSocialFacebookCircular size={30}/>
                    <TiSocialInstagram size={30}/>
                    <TiSocialLinkedin size={30}/>
                </div>

                <p className='font-bold'>&copy; 2023 Raedeck.com All rights reserved</p>
                <p>Address Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, vitae</p>
                <p>Tel. +1234567890 Mon-Fri 8am-5pm(Gm+2)</p>

            </div>
        </div>
    )
}

export default Footer;
