 import './App.css';
 import './Component/Sub-comp/Header.css'
import Header from './Component/Sub-comp/Header';
import Button from './Component/Button';

function App() {
  return (
    <div>
     <Header></Header>
     <div className="container">
     <Button color="primary" /><br />
     <Button color="danger"/>
     </div>
    </div>
  );
}

export default App;
