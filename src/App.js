import React from 'react';
import './App.css'


//Bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';





//My components
import Main from './components/main.component'
import Header from './components/header.component'
import Footer from './components/footer.component'
import { grey } from '@material-ui/core/colors';





function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <br></br>
      <Footer></Footer>
    </div>

  );
}

export default App;
