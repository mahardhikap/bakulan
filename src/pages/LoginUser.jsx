import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export function LoginUser() {
  const navigate = useNavigate();
  return (
    <div className="w-1/3 mx-auto container h-screen flex flex-col items-center justify-center">
      <div className="my-3">
        <div
          className="text-3xl font-extrabold text-green-400 cursor-pointer text-center"
          onClick={() => navigate('/homepage')}
        >
          Bakulan <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="font-bold text-green-300 text-center">
          Login User
        </div>
      </div>
      <div className="">
        <input
          placeholder="Username"
          className="p-3 rounded-lg border w-full my-2"
        />
        <input
          placeholder="Password"
          className="p-3 rounded-lg border w-full mb-2"
        />
        <div className="text-center">
          <button className="p-3 bg-green-400 text-white rounded-lg font-bold w-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
