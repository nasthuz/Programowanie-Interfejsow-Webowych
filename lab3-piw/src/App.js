import { useState } from "react";
import './App.css';
import Main from './Pages/Main';
import Login from './Pages/login';
import AddNewValue from "./Pages/AddNewValue";
import SearchPage from "./Pages/SearchPage";
import AddGroup from "./Pages/AddGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,NavLink, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
// import student from './data/studentData.json';

import {auth} from "./firebase/init";
import {useAuthState} from "react-firebase-hooks/auth"
import {logout} from "./firebase/users";

function App() {

  const [user] =useAuthState(auth);
  const [student, setStudent] = useState([]);
  // const [student, setStudent] = useState([
  //   { name:'Jan Kowalski',email:"25656@student.pl", grupa: 'E67-0K', opis: 'szukam pary do grupy 2 os.', tagi: 'ucisw, para', subjects: 'ucisw'},
  //   { name:'Jozef Bolek',email:"25636@student.pl", grupa: 'E98-8K', opis: 'szukam pary do grupy  3 os.', tagi: 'po, para', subjects: 'po'},
  //   { name:'Lisa Lorak',email:"24656@student.pl", grupa: 'E76-0K', opis: 'szukam pary  do grupy 5 os.', tagi: 'ucisw, para', subjects: 'ucisw'},
  //   { name:'Kim Jenny',email:"25659@student.pl", grupa: 'E67-0K', opis: 'szukam pary  do grupy 3 os.', tagi: 'so2, para', subjects: 'so2'},
  //   { name:'Marek Kowalski',email:"25629@student.pl", grupa: 'E67-2K', opis: 'szukam pary  do grupy 2 os.', tagi: 'ucisw, para', subjects: 'ucisw'},
  //   { name:'Julia Kobarevich',email:"25159@student.pl", grupa: 'E98-8K', opis: 'szukam pary  do grupy 4 os.', tagi: 'po, para', subjects: 'po'}
  // ]);

  // grupa sklada sie z nazwy czlonkow i czym sie zajmuja opis projektu 
  // do ktorego szukaja
  const [groups, setGroups] = useState([
    {nameGr: "23", participants: "Ala, Ola, Kasia", subjectGr: "ucisw", opis: "Grupa robi projekt gry do firmy univerlun "},
    {nameGr: "32", participants: "Tomek, Jerzy, Rodak", subjectGr: "po", opis: "patrz dokumentacje na stronie prowadzacego. "},
    {nameGr: "9", participants: "Tomek, Marek, Lisa", subjectGr: "tsci", opis: "informacja przy wlasnym kotakcie. "},
  ]);

  const addData = (newData) => {
    setStudent([newData, ...student]);
  };
  const addDataGr = (newDataGr) => {
    setGroups([newDataGr, ...groups]);
  };
  return (

    <>
    <main>
      <BrowserRouter>
        <nav class="navbar navbar-expand-sm bg-light">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/"><Button variant="light"><h5> Home </h5></Button></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/add"><Button variant="light"><h5> Add offer </h5></Button></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/searchGroup"><Button variant="light"><h5> Search  group </h5></Button></NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/addGroup"><Button variant="light"><h5> Add group </h5></Button></NavLink>
            </li>
            <li class="nav-item">
              
           
            {user 
            && <button onClick={logout}> log{user.displayName}Out</button>
            || <NavLink to="/login"><Button variant="light"><h5> login </h5></Button></NavLink>} 
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main student={student} setStudent={setStudent} />}/>
          <Route path="/add" element={<AddNewValue  addData={addData} />}/>
          <Route path="/searchGroup" element={<SearchPage groups={groups}/>}/>
          <Route path="/addGroup" element={<AddGroup  addDataGr={addDataGr} />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
    <footer>footer</footer>
  </>
  );
}

export default App;
