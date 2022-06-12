import React from "react";
import { useState } from "react";

const Main = (props) => {

    const {setStudent, student} = props;
    const[searchTerm, setSearchTearm] = useState("");
  
    return (
      <div className="App">
        <h3 className='p-3 text-center'>List of students</h3>
  
        {/* Search */}
        <div className='ui search'>
          <div className='ui icon input'>
            <input type="text" placeholder="Search" onChange={event => {setSearchTearm(event.target.value)}}/>
          </div>
        </div>

        {/* Display of the groups */}
        <table className="table table-striped table-bordered">
          <thread>
            <tr>
              {/* doesnt fit tab */}
              <th>Name</th>
              <th>Grupa</th>
              <th>Opis</th>
              <th>Tagi</th>
              <th>Subject</th>
            </tr>
          </thread>
          <tbody>
            {/* search bar:  search name, group, description, tags, subjects */}
            {student && student.filter((student)=>{
              if(searchTerm === ""){
                return student
              }else if(student.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return student
              }else if(student.grupa.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return student
              }else if(student.opis.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return student
              }else if(student.tagi.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return student
              }else if(student.subjects.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return student
              }
            }
            ).map(student =>
              <tr>
                <td>{student.name}</td>
                <td>{student.grupa}</td>
                <td>{student.opis}</td>
                <td>{student.tagi}</td>
                <td>{student.subjects}</td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
    );
}

export default Main;