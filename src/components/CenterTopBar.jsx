import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
export function CenterTopBar(props) {
  const onChangeSearch = (e) => {
    props.onChangeSearch(e.target.value);
  };

  return (
    <div className="flex flex-row justify-between items-center pe-10">
      <div>
        <input
          className="border border border-green-200 rounded-md p-1 outline-none"
          placeholder="Search item"
          onChange={onChangeSearch}
        />
      </div>
      <div className="flex gap-10 font-medium">
        <Link to={'/login'}>
          <div>Login</div>
        </Link>
        <Link to={'/register'}>
          <div>Register</div>
        </Link>
        <div className="text-green-500 relative">
          <FontAwesomeIcon icon={faBasketShopping} size={'100 px'}/>
          <span className='text-xs text-green-300 absolute top-[-8px] p-1'>{props.Counting}</span>
        </div>
      </div>
    </div>
  );
}
