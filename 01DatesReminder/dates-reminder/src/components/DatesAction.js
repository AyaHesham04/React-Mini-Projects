import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'


const DatesAction = ({deleteData, viewData}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8"  className="d-flex justify-content-between">
      <Button className="btn-style p-2" onClick={deleteData}>Clear All</Button>
      <Button className="btn-style p-2" onClick={viewData}>Show dates</Button>
    </Col>
  </Row>
  )
}

export default DatesAction
