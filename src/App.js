import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateContact from './components/CreateContact';
import ContactList from './components/ContactList'; 
import EditContact from './components/EditContact'; 
import ChartsMaps from './components/ChartsMaps';
import Map from './components/Map';
import './App.css';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
         <nav className='navbar'>
                <Link to="/create">Create Contact</Link>
              
              
                <Link to="/contacts">Contact List</Link>
                <Link to="/mapscharts">Maps and Charts</Link>
                
                </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/contacts" element={<ContactList />} /> {/* Route to ContactList */}
            <Route path="/edit/:contactId" element={<EditContact />} />
            <Route path="/mapscharts" element={<ChartsMaps/>} />
            <Route path="/map" element={<Map/>} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

const Home = () => {
  
  return (
    <div className='maintext'>
      <p>Welcome to Contact Management App</p>
    </div>
  );
};



export default App;
