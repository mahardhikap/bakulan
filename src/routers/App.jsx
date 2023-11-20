import { Navigate, Route, Routes, BrowserRouter} from 'react-router-dom';
import { Homepage } from '../pages/Homepage';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace={true} />} />
            <Route path="/homepage" element={<Homepage />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;