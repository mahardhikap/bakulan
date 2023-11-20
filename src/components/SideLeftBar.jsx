import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export function SideLeftBar() {
  return (
    <div className="flex flex-col gap-5 relative h-full">
      <div className="text-3xl font-extrabold text-green-400">
        Bakulan <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <div>All</div>
      <div>Men</div>
      <div>Women</div>
      <div>Jewel</div>
      <div>Electronic</div>
      <div className='absolute bottom-0'>
        <div className='font-semibold'>Support Customer</div>
        <div className='font-bold'>&copy; Project13</div>
      </div>
    </div>
  );
}
