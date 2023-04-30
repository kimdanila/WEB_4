import { Nav, NavLink, NavMenu } from "./Navbar/NavbarElements";
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Notes_pages from './Notes_pages';
import Graphs from './Graphs';
function Header() {
  
  return (
    
    <>
      <div className="header">
  <h1 className="notes__title">RPIS 2DO Kim Edition</h1>
</div>
     <Router>
    <Nav>       
        <NavMenu>
          <NavLink to="/Notes_pages" activeStyle>
           Заметки
          </NavLink>
          <NavLink to="/Graphs" activeStyle>
            Графики
          </NavLink>        
        </NavMenu>
      </Nav>
     <Routes>
         <Route path='/Notes_pages' element={<Notes_pages/>} />
         <Route path='/Graphs' element={<Graphs/>} />
   
     </Routes>
     </Router>
     </>
  );
 
}

export default Header;
