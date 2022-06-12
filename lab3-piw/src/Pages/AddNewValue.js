import React, { useState } from "react";
import {Button } from "react-bootstrap";

const AddNewValue = ({addData}) => {
    const [nameIn, setNameIn] = useState("");
    const [emailIn, setEmailIn] = useState("");
    const [grupaIn, setGrupaIn] = useState("");
    const [opisIn, setOpisIn] = useState("");
    const [tagiIn, setTagiIn] = useState("");
    const [subjectsIn, setSubjectsIn] = useState("");

    const handleAddNewValue = (event) =>{
        event.preventDefault();
        let newData = {
            name: nameIn,
            email:emailIn,
            grupa: grupaIn, 
            opis: opisIn,
            tagi: tagiIn,
            subjects: subjectsIn, 
        };
        addData(newData);
        setNameIn("");
        setEmailIn("");
        setGrupaIn("");
        setOpisIn("");
        setTagiIn("");
        setSubjectsIn("");
    };

    return(
        <div className="new-entry">
            <h3 className='p-3 text-center'>Add your application </h3>
            
                <form  onSubmit= {(event) => {handleAddNewValue(event);}}>
                
                    <div className ="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div>
                        <label>Name </label>
                        <input type="text" placeholder="Name" maxLength="50" value={nameIn} onChange={(event) => {setNameIn(event.target.value);}}/>
                    </div>

                    <div>
                        <label>Email </label>
                        <input type="text" placeholder="Email" maxLength="50" value={emailIn} onChange={(event) => {setEmailIn(event.target.value);}}/>
                    </div>

                    <div>
                    <label>Group </label>
                        <input type="text" placeholder="Group" maxLength="50" value={grupaIn}  onChange={(event) => {setGrupaIn(event.target.value); }}/>
                    </div>

                    <div>
                    <label>Opis </label>
                        <input type="text" placeholder="Opis" maxLength="300" value={opisIn} onChange={(event) => { setOpisIn(event.target.value); }} />
                    </div>

                    <div>
                    <label>Tags </label>
                        <input type="text" placeholder="Tags" maxLength="50" value={tagiIn} onChange={(event) => { setTagiIn(event.target.value);}}/>
                    </div>
                    <div>
                    <label>Subjects </label>
                        <input type="text" placeholder="Subjects" maxLength="50" value={subjectsIn} onChange={(event) => { setSubjectsIn(event.target.value); }}/>
                    </div>
                </div>              
                    <Button variant="primary" type="submit">Submit</Button>
    
                </div>
                </form> 

        </div>
    );

};

export default AddNewValue;

