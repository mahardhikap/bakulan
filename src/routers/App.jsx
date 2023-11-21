import { Navigate, Route, Routes, BrowserRouter} from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { Jewel } from '../pages/Jewel';
import { Electronic } from '../pages/Electronic';
import { Men } from '../pages/Men';
import { Women } from '../pages/Women';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace={true} />} />
            <Route path="/homepage" element={<Homepage />}/>
            <Route path="/jewelery" element={<Jewel />}/>
            <Route path="/electronics" element={<Electronic />}/>
            <Route path="/men" element={<Men />}/>
            <Route path="/women" element={<Women />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;