'use client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from "axios";
import LoadingSpinner from '@/components/LoadingSpinner';



const Shorten = () => {
        const [loading, setLoading] = useState(true);

        const params = useParams<{ shorten: string}>();
        console.log("danez linka", params.shorten);
        
     
                axios.get(process.env.NEXT_PUBLIC_URL + "api/redirect?query=" + process.env.NEXT_PUBLIC_URL + params.shorten).then((resp) => {
                        const { data } = resp;
                        console.log('url_redirect ' + data.url)
                        window.location.href = data.url; // Przekierowanie na inną stronę
                    });
            
     
        

    return (
        <div>
      {loading ? <LoadingSpinner /> : (
        <div>
          {/* Tutaj umieść swój kod do renderowania danych */}
          <h1 className="text-2xl font-bold">Moja strona</h1>
          <p>Treść strony</p>
        </div>
      )}
    </div>
    )
}


export default Shorten

