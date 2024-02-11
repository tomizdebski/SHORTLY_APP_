'use client';
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from "axios";



const Shorten = () => {

        const params = useParams<{ shorten: string}>();
        console.log("danez linka", params.shorten);
        
     
                axios.get(process.env.NEXT_PUBLIC_URL + "api/redirect?query=" + process.env.NEXT_PUBLIC_URL + params.shorten).then((resp) => {
                        const { data } = resp;
                        console.log('url_redirect ' + data.url)
                        window.location.href = data.url; // Przekierowanie na inną stronę
                    });
            
     
        

    return (
        <div className="w-full h-full"> ....loading</div>
    )
}


export default Shorten

