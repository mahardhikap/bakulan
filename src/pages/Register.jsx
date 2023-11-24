import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export function Register() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto w-2/3">
      <div className="my-3">
        <div
          className="text-3xl font-extrabold text-green-400 cursor-pointer text-center"
          onClick={() => navigate('/homepage')}
        >
          Bakulan <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="font-bold text-green-300 text-center">
          Register User
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className='p-2 flex flex-col gap-2'>
          <div className="text-center font-medium">User Identity</div>
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Full Name"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Username"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Phone Number"
          />
          <select name="" id="" className="p-3 border rounded-lg">
            <option value="roles" disabled>
              choose roles
            </option>
            <option value="seller">seller</option>
            <option value="buyer">buyer</option>
          </select>
          <input className="p-3 border rounded-lg w-full" placeholder="Email" />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Password"
          />
        </div>
        <div className='p-2 flex flex-col gap-2'>
          <div className="text-center font-medium">User Address</div>
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Street"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Sub-District"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Region/City"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Postal Code"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Province"
          />
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Country"
          />
        </div>
      </div>
      <div className="text-center my-3">
        <button className="p-3 bg-green-400 rounded-lg font-bold text-white w-full">
          Submit
        </button>
      </div>
    </div>
  );
}
