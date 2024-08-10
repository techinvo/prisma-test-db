'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Sidebar = ({ isOpen }) => {
    const pathname = usePathname()
    const breedingPageUrl = `${process.env.NEXT_PUBLIC_API_URL}/page/breedingPage`;
    const managementPageUrl = `${process.env.NEXT_PUBLIC_API_URL}/management`;
    const mainPageUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;
    return (
        <div className={`sidebar basis-2/12 ${isOpen ? '' : 'closed'}`}>
            <div className="nav-section">
                <label className="text-xs text-nowrap">Management Page</label>
                <Link href={mainPageUrl} className={`nav-link pl-2 shadow-lg rounded-md transition-all duration-300 ease-in-out  ${pathname === '/' ? 'bg-white' : ''}`} >
                    <div className={`text-nowrap ${pathname === '/' ? 'text-slate-600 shadow-xl' : 'hover:shadow-md'}`}>
                        main Page
                    </div>
                </Link>
                <Link href={managementPageUrl} className={`nav-link pl-2 shadow-lg rounded-md transition-all duration-300 ease-in-out  ${pathname === '/management' ? 'bg-white' : ''}`} >
                    <div className={`text-nowrap ${pathname === '/management' ? 'text-slate-600 shadow-xl' : 'hover:shadow-md'}`}>
                        Database Page
                    </div>
                </Link>
                <Link href={breedingPageUrl} className={`nav-link pl-2 shadow-lg rounded-md transition-all duration-300 ease-in-out  ${pathname === '/page/breedingPage' ? 'bg-white' : ''}`} >
                    <div className={`text-nowrap ${pathname === '/page/breedingPage' ? 'text-slate-600 shadow-xl' : 'hover:shadow-md'}`}>
                        Breeding Page
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
