import React, { useState } from "react";
import { Form, Button, Badge } from "react-bootstrap";

const AddGroup = ({addDataGr}) => {
    const [nameGrIn, setNameGrIn] = useState("");
    const [subjectGrIn, setSubjectGrIn] = useState("");
    const [opisIn, setOpisIn] = useState("");
    const [participantsIn, setParticipantsIn] = useState("");

    const submitHandler = (event) =>{
        event.preventDefault();
        let newDataGr = {
            nameGr: nameGrIn, 
            participants: participantsIn,
            subjectGr: subjectGrIn, 
            opis: opisIn,
        };
        addDataGr(newDataGr);
        setNameGrIn("");
        setSubjectGrIn("");
        setOpisIn("");
        setParticipantsIn("");
    };

    return(
    <div className="new-entry">
        <h3 className='p-3 text-center'>Add your group </h3>
            <form  onSubmit= {(event) => {submitHandler(event);}}>
            <div className ="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                 <div>
                    <label>Name of the group</label>
                    <input type="text"
                    placeholder="Name" maxLength="50" value={nameGrIn} onChange={(event) => {setNameGrIn(event.target.value);}}/>
                </div>
                <div>
                    <label>Participaints</label>
                    <input type="text" placeholder="Participaints" maxLength="50" value={participantsIn} onChange={(event) => { setParticipantsIn(event.target.value);}}/>
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" placeholder="Subject" maxLength="50" value={subjectGrIn}  onChange={(event) => {  setSubjectGrIn(event.target.value);}}/>
                </div>
                <div>
                    <label>Opis</label>
                    <input type="text"  placeholder="Opis"  maxLength="300"  value={opisIn}  onChange={(event) => { setOpisIn(event.target.value); }} />
                </div>
                
</div>
                <Button variant="primary" type="submit">Submit</Button>
                </div>
            </form> 

    </div>
    );

};

export default AddGroup;

