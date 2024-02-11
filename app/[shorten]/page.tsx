'use client';
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from "axios";



const shorten = () => {

        const params = useParams<{ shorten: string}>();
        console.log("danez linka", params.shorten);
        
     
                axios.get(process.env.NEXT_PUBLIC_URL + "api/redirect?query=" + process.env.NEXT_PUBLIC_URL + params.shorten).then((resp) => {
                        const { data } = resp;
                        console.log('url_redirect ' + data.url)
                        window.location.href = data.url; // Przekierowanie na inną stronę
                        // lub
                        // window.location.replace(data.url); // Przekierowanie na inną stronę z zamianą historii przeglądarki
                    });
            
     
        

    return (
        <div> shorten</div>
    )
}


export default shorten

