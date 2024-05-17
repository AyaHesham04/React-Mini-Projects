import {Button, Container, Col, Row } from "react-bootstrap";
import {person} from './data.js'
import DatesCount from "./components/DatesCount.js";
import DatesList from "./components/DatesList.js";
import DatesAction from "./components/DatesAction.js";
import React, { useState } from "react";

function App() {

  const [personData, setPersonData]=useState(person);

  const onDelete=()=>{
    setPersonData([]);
  }

  const onViewData=()=>{
    setPersonData(person);
  }

  return (
    <div className="font color-body">
      <Container className="py-4">
        <DatesCount person={personData}/>
        <DatesList  person={personData}/>
        <DatesAction deleteData={onDelete} viewData={onViewData}/>
      </Container>

    </div>
  );
}

export default App;
