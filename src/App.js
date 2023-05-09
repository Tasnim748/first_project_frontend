import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
      <div className="App">
          <svg className='nav-icon' width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9935 0H0V1.99938H20.9935V0Z" fill="black"/>
            <path d="M20.9935 6.87387H0V8.87325H20.9935V6.87387Z" fill="black"/>
            <path d="M20.9935 13.7057H0V15.7051H20.9935V13.7057Z" fill="black"/>
          </svg>
          <AnimatedRoutes />
    </div>
  );
}

export default App;
