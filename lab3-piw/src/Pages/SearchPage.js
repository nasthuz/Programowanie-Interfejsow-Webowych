import React, { useState } from "react";

// podstrona do poszukiwania grupy
// grupa sklada sie z nazwy czlonkow i czym sie zajmuja opis projektu 
// do ktorego szukaja

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {query: ""};
    }

    handleSearch = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        // const {groups, query} = this.props;
        const lowerCaseVal = this.state.query.toLowerCase().trim();
        const groupsHTML = this.props.groups.filter((it) =>
                     it.nameGr.toLowerCase().includes(lowerCaseVal)
                    || it.subjectGr.toLowerCase().includes(lowerCaseVal)
                    || it.opis.toLowerCase().includes(lowerCaseVal)
                    || it.participants.toLowerCase().includes(lowerCaseVal)
        )
        .map( (it, i) =>{
            return(
                <div className ="container p-3 my-3 border">
                <div className="card" key={i}>
                    <div className="card-header">
                        <h7>Grupa: {it.nameGr}</h7>
                        <h5 className="card-title">Kurs: {it.subjectGr}</h5>
                    </div>
                    <p className="card-body">{it.opis}</p>
                    <div className="card-footer">Czlonki zespolu: {it.participants}</div>
                
                </div>
            </div>
            );
        });

        return <div>
            <input type="text" placeholder="Search" className="search" value={this.state.query} onChange={this.handleSearch} />
            {groupsHTML}
        </div>
    }
};

export default SearchPage;
