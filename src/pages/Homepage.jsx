import { SideLeftBar } from '../components/SideLeftBar';
import { DisplayHome } from '../components/DisplayHome';
import { CenterTopBar } from '../components/CenterTopBar';
export function Homepage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 h-screen sticky top-0">
          <SideLeftBar />
        </div>
        <div className="col-span-3 border-s bg-slate-100">
          <div className='sticky top-0 p-2 bg-white border-b'>
            <CenterTopBar />
          </div>
          <DisplayHome />
        </div>
      </div>
    </div>
  );
}
