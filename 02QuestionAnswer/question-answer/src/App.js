import {Button, Col, Container, Row} from 'react-bootstrap'
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import { useState } from 'react';
import { question } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data,setData] = useState(question);

  //to add new item
  const addItem = () =>{
    localStorage.setItem("items", JSON.stringify([...question]));//to make browser read data as json
    setData([...question]);
    notify("Added Successfully", "Success");

  }

  //to delete all data items
  const deleteALLItems = () =>{
    localStorage.removeItem("items");
    question.splice(0, question.length); //delete from first item to last
    setData([]);
    notify("Deleted Successfully", "Success");

  }

  //to delete one item from array
  const deleteOneItem = (items) =>{
    localStorage.setItem("items", JSON.stringify([...items]));//to make browser read data as json
    setData([...items]);
    notify("Deleted Question Successfully", "Success");
    if(items.length<=0){
      deleteALLItems();
    }
  }

  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };

  return (
    <div className="font text-center color-body">
      <Container className='p-5'>
        <Row className='justift-content-center'>
          <Col sm="4">
            <div className='fs-3 text-center py-2'>Frequent Questions and Answers</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteALLItems} className="btn-color w-100 my-3">Delete All</button>) : null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
