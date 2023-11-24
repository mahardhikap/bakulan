import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../redux/actions/getSingleProduct';

export function DetailProduct() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.getDetailProduct);
  const dispatch = useDispatch();

  const getDetail = () => {
    dispatch(getDetailProduct(id));
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="container mx-auto w-2/3">
      <div className="my-5">
        <div className='flex justify-between items-center'>
        <div className="text-3xl font-extrabold text-green-400 cursor-pointer">
          Bakulan <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="text-green-500 relative">
          <FontAwesomeIcon icon={faBasketShopping} size={'100 px'}/>
          <span className='text-xs text-green-300 absolute top-[-8px] p-1'>0</span>
        </div>
        </div>
        <div className="font-bold text-center my-5">{data?.title}</div>
        <div className="grid grid-cols-2 my-10">
          <div className="me-2 p-2">
            <div className="flex justify-center items-center">
              <img src={data?.image} alt="product" className="max-w-56 h-56" />
            </div>
          </div>
          <div className="p-2 flex flex-col justify-between rounded-lg">
            <div>
              <label className="text-gray-400 font-normal text-xs">
                Category
              </label>
              <div className="font-medium">{data?.category}</div>
            </div>
            <div>
              <label className="text-gray-400 font-normal text-xs">
                Description
              </label>
              <div>{data?.description}</div>
            </div>
            <div>
              <label className="text-gray-400 font-normal text-xs">Price</label>
              <div className="font-bold">${data?.price}</div>
            </div>
          </div>
        </div>
        <button className="font-bold bg-green-300 p-3 text-white text-center rounded-lg my-2 w-full">
          Add to cart <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
}
