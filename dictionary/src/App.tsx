import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './components/Home/Home';
import { Result } from './components/Result/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":word" element={<Result />} />
    </Routes>);
}

export default App;

