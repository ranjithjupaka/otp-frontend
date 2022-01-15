
import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './pages/MainRoute';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container>
          <MainRoute />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App;
