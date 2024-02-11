'use client';
import React from 'react'

const CopyButton = ({ text }: {text:String}) => {
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text as string);
        alert(`Link copied to clipboard : ${text}`);
      } catch (error) {
        console.error('Failed to copy:', error);
        alert('Failed to copy link!');
      }
    };
  
    return (
      <button onClick={copyToClipboard} className='bg-red-nav py-[12px] px-[88px] sm:py-[12px] sm:px-[24px]  flex-1 text-center  text-white  font-saira hover:bg-red-400'>
        Copy !
      </button>
    );
  };
  
  export default CopyButton;