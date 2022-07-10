import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import PlaceList from './PlaceList/PlaceList';
import { Container } from '@mui/material';
function App() {
  return (
    // <div className="App">
    
    // </div>
    <>  <header className="App-header">
  <Header />
      </header>
    <Container style={{padding:'10px'}}>
    
    <PlaceList />
    </Container>
</>
    

  );
}

export default App;
