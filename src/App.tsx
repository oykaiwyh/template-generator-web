import { DatePicker, Button } from 'antd';
import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className='app'>
      <DatePicker />
      <Button>提交</Button>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='app-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
