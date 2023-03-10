import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

// import ShowProducts from './components/ShowProducts';
// import CreateProduct from './components/CreateProduct';
// import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        {/* <Routes>
          <Route path='/' element={ <ShowProducts/> } />
          <Route path='/create' element={ <CreateProduct/> } />
          <Route path='/edit/:id' element={ <EditProduct/> } />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
