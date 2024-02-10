import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-[1000px] gap-4'>
      <h2 className="text-[#ffffff] text-left font-saira ">Not Found this is demo</h2>
      <p className="text-[#ffffff] text-left font-saira ">Could not find requested resource</p>
      <Link className="main_btn" href="/">Return Home</Link>
    </div>
  )
}