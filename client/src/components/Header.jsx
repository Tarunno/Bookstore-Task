import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-6 py-2 w-full border-b'>
      <div className='flex items-center gap-1 text-[25px] text-brand'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
          <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
          <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
        </svg>
        <p className='font-bold'>BOOK<span className='font-normal'>STORE</span> </p>
      </div>
      <ul className='flex items-center justify-between gap-2'>
        <Link to=''> <li className='text-[13px] font-semibold px-4 py-2 border rounded-lg hover:cursor-pointer bg-brand text-white'>Home</li> </Link>
        <Link to='/add'> <li className='text-[13px] font-semibold px-4 py-2 border rounded-lg hover:cursor-pointer bg-brand text-white'>Add book</li> </Link>
        <li className='flex text-brand cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-10">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
          </svg>
        </li>
      </ul>
    </div>
  )
}

export default Header