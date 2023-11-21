import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export function SideLeftBar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);
  return (
    <div className="flex flex-col gap-5 relative h-full">
      <div className="text-3xl font-extrabold text-green-400 cursor-pointer" onClick={()=>navigate('/homepage')}>
        Bakulan <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <Link to={'/homepage'}>
        <div
          className={`${
            activeMenu === '/homepage'
              ? 'border-e-4 border-green-400 bg-slate-100'
              : 'border-none bg-inherit'
          } py-2`}
        >
          All
        </div>
      </Link>
      <Link to={'/men'}>
        <div
          className={`${
            activeMenu === '/men'
              ? 'border-e-4 border-green-400 bg-slate-100'
              : 'border-none bg-inherit'
          } py-2`}
        >
          Men
        </div>
      </Link>
      <Link to={'/women'}>
        <div
          className={`${
            activeMenu === '/women'
              ? 'border-e-4 border-green-400 bg-slate-100'
              : 'border-none bg-inherit'
          } py-2`}
        >
          Women
        </div>
      </Link>
      <Link to={'/jewelery'}>
        <div
          className={`${
            activeMenu === '/jewelery'
              ? 'border-e-4 border-green-400 bg-slate-100'
              : 'border-none bg-inherit'
          } py-2`}
        >
          Jewelery
        </div>
      </Link>
      <Link to={'/electronics'}>
        <div
          className={`${
            activeMenu === '/electronics'
              ? 'border-e-4 border-green-400 bg-slate-100'
              : 'border-none bg-inherit'
          } py-2`}
        >
          Electronics
        </div>
      </Link>
      <div className="absolute bottom-0">
        <div className="font-semibold">Support Customer</div>
        <div className="font-bold">&copy; Project13</div>
      </div>
    </div>
  );
}
