import React, { useState, useEffect } from 'react';
import { SideLeftBar } from '../components/SideLeftBar';
import { CenterTopBar } from '../components/CenterTopBar';
import { useDispatch, useSelector } from 'react-redux';
import { getWomenProducts } from '../redux/actions/getAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export function Women() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getWomenProducts);
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const getProducts = () => {
    dispatch(getWomenProducts());
  };
  const onSearchChange = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filteredPost = data.filter((item) =>
      item.title.toLowerCase().includes(lowercasedValue)
    );
    setPost(filteredPost);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 h-screen sticky top-0">
          <SideLeftBar />
        </div>
        <div className="col-span-3 border-s border-green-200 bg-slate-100">
          <div className="sticky top-0 p-2 bg-white border-b border-green-200">
            <CenterTopBar onChangeSearch={onSearchChange} Counting={count} />
          </div>
          <div>
            <div className="my-2 text-center font-bold">PRODUCTS</div>
            <div className="flex flex-wrap justify-center items-center gap-5">
              {post.length !== 0
                ? post?.map((item, index) => {
                    return (
                      <div
                        className="w-40 h-60 bg-white rounded-md p-2"
                        key={index}
                      >
                        <Link to={`/detail/${item.id}`}>
                          <div className="flex justify-center items-center">
                            <img src={item.image} className="max-h-20" />
                          </div>
                          <div className="truncate font-bold">{item.title}</div>
                          <div className="text-sm">
                            <p className="font-semibold">{item.category}</p>
                            <p className="font-medium">${item.price}</p>
                            <div className="font-medium">
                              Rate:{' '}
                              <FontAwesomeIcon icon={faStar} color="gold" />
                              {item.rating.rate}
                            </div>
                          </div>
                        </Link>
                        <div className="text-center mt-3">
                          <button className="p-1 bg-green-200 rounded-md font-semibold w-full">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    );
                  })
                : data?.map((item, index) => {
                    return (
                      <div
                        className="w-40 h-60 bg-white rounded-md p-2"
                        key={index}
                      >
                        <Link to={`/detail/${item.id}`}>
                          <div className="flex justify-center items-center">
                            <img src={item.image} className="max-h-20" />
                          </div>
                          <div className="truncate font-bold">{item.title}</div>
                          <div className="text-sm">
                            <p className="font-semibold">{item.category}</p>
                            <p className="font-medium">${item.price}</p>
                            <div className="font-medium">
                              Rate:{' '}
                              <FontAwesomeIcon icon={faStar} color="gold" />
                              {item.rating.rate}
                            </div>
                          </div>
                          <div className="text-center mt-3">
                            <button className="p-1 bg-green-200 rounded-md font-semibold w-full">
                              Add to cart
                            </button>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
