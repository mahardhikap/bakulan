import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/getAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export function DisplayHome() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllProducts);
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="my-2 text-center font-bold">PRODUCTS</div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {data?.map((item) => {
          return (
            <div className="w-40 h-60 bg-white rounded-md p-2">
              <div className="flex justify-center items-center">
                <img src={item.image} className="max-h-20" />
              </div>
              <div className="truncate font-bold">{item.title}</div>
              <div className="">
                <div className='text-sm'>
                  <p className="font-semibold">{item.category}</p>
                  <p className="font-medium">${item.price}</p>
                  <div className="font-medium">
                    Rate: <FontAwesomeIcon icon={faStar} color="gold" />
                    {item.rating.rate}
                  </div>
                </div>
                <div className='text-center mt-3'>
                  <button className="p-1 bg-green-200 rounded-md font-bold">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
