import Link from 'next/link'
import {useState} from "react";
const HeaderProvenance = () => {

    const [Menu, setMenu] = useState('');


    let openMenu = () =>{
      setMenu('openMenu');
    }
    
    let closeMenu = () =>{
      setMenu('');
  
    }
    return (
        <>
              <div className="header   sticky top-0 bg-white py-2">
             <div className="mx-auto w-full px-7 widthMax flex items-center justify-between">
             <div className="logo cursor-pointer"><Link href="/" ><div className="flex items-center gap-2 font-bold"><img src="/images/small-shark2.png" className="w-14" alt="Logo" style={{imageRendering: "pixelated"}}/> <span className="opacity-80">PunkSharks</span></div></Link></div>

<nav className="flex items-center lgScreenNav gap-20 font-bold">
       <Link href="/#" className="opacity-70 transition-colors hover:opacity-90">Home</Link>
       <Link href="/#categories" className="opacity-70 transition-colors hover:opacity-90">Categories</Link>
       <Link href="/#faq" className="opacity-70 transition-colors hover:opacity-90">FAQ</Link>
       <Link href="/#stats" className="opacity-70 transition-colors hover:opacity-90">Stats</Link>
       <Link href="/#largestSales" className="opacity-70 transition-colors hover:opacity-90">Largest Sales</Link>
<Link href="/provenance"><div className="px-5 py-3 bg-blue-500 cursor-pointer lgScreenBtn transition-colors hover:bg-blue-600 text-white font-extrabold rounded-md">Provenance</div></Link>

</nav>


<img src="/images/burger-menu.svg" alt="menu icon" className="w-7 cursor-pointer burger-menu hidden" onClick={openMenu} />


<div className={`mobileMenu hidden ${Menu}`}>
<nav className="">
<i class="far fa-times cursor-pointer" onClick={closeMenu}></i>
     <div className="flex items-center mmmb gap-20 font-bold">
     <Link onClick={closeMenu} href="/#" className="opacity-70 transition-colors hover:opacity-90">Home</Link>
       <Link onClick={closeMenu} href="/#categories" className="opacity-70 transition-colors hover:opacity-90">Categories</Link>
       <Link onClick={closeMenu} href="/#faq" className="opacity-70 transition-colors hover:opacity-90">FAQ</Link>
       <Link onClick={closeMenu} href="/#stats" className="opacity-70 transition-colors hover:opacity-90">Stats</Link>
       <Link onClick={closeMenu} href="/#largestSales" className="opacity-70 transition-colors hover:opacity-90">Largest Sales</Link>
       <Link onClick={closeMenu} href="/#details" className="opacity-70 transition-colors hover:opacity-90">Details</Link>
       <Link href="/provenance"><div className="px-5 py-3 w-fit bg-blue-500 cursor-pointer transition-colors hover:bg-blue-600 text-white font-extrabold rounded-md">Provenance</div></Link>
     
     </div>

</nav>

</div>
             </div>
     </div>

        </>
    )
}

export default HeaderProvenance
