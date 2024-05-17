import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { question } from '../data';

const FormInput = ({onAdd, notify}) => {

    const [qu,setQu] = useState('');
    const [ans,setAns] = useState('');

    //to push data to array
    const addNewItem=()=>{
        if(qu === '' || ans ==='')
        {
            notify("empty", "Error");
            return;
        }
        question.push({id:Math.random(),q:qu,a:ans});
        setQu('');
        setAns('');
        onAdd();
    }

  return (
    <Row className='my-3'>

        <Col sm="5">  
            <Form.Control value={qu} type="text" placeholder="Enter Question" onChange={(e) => setQu(e.target.value)}/>
        </Col>

        <Col sm="5">
            <Form.Control value={ans} type="text" placeholder="Enter Answer" onChange={(e) => setAn(e.target.value)}/>
        </Col>
        
        <Col sm="2">
            <Button className="btn-color w-100" type="submit" onClick={addNewItem}>
                Add
            </Button>
        </Col>
    </Row>
  )
}

export default FormInput
