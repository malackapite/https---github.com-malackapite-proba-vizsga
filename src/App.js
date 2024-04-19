import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AxiosProvider } from './Axios';
import Oldal from './Oldal';

function App() {
  return (
    <div className="App">
      <AxiosProvider>
        <Oldal/>
      </AxiosProvider>
    </div>
  );
}

export default App;
