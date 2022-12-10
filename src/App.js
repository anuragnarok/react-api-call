
import './App.css';
import ApiAxios from './components/ApiAxios';
import AsyncAwait from './components/AsyncAwait';


function App() {
  return (
    <div className="App">
     {/* <ApiFetch/> */}
     <ApiAxios/>
     <AsyncAwait/>
    </div>
  );
}

export default App;
