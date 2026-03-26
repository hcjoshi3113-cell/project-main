import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trips } from '../../Data/tripsData'
import { Container, Row, Col, Button, Card, Badge, Form, FloatingLabel } from 'react-bootstrap'
import { authContext } from '../context/Context'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const BookingsForm = () => {

  const { id } = useParams()

  const selectedTrips = trips.find((t) => t.id === Number(id))

  const { user } = useContext(authContext)

  console.log("user", user)

  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    phone: "",
    grandTotal: 0,
    totalPerson: 1,
    specialRequest: null,
    tripDate: ""
  })


  const navigate = useNavigate()

  const handleChange = (identifier, e) => {
    setFormData((data) => {
      return {
        ...data,
        [identifier]: e.target.value
      }
    })
  }

  useEffect(() => {

    setFormData((prevData) => {
      return {
        ...prevData,
        grandTotal: prevData.totalPerson * selectedTrips.price
      }
    })

  }, [formData.totalPerson, selectedTrips.price])



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await addDoc(collection(db, "bookings"), {
        userId: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tripDate: formData.tripDate,
        specialRequest: formData.specialRequest,
        totalPerson: formData.totalPerson,
        grandTotal: formData.grandTotal,
        tripId: id,
        tripName: selectedTrips.name,
        tripPrice: selectedTrips.price,
        createdAt: serverTimestamp(),

      })

      alert("Trip booked successfully")

      setFormData({
        phone: "",
        tripDate: "",
        specialRequest: "",
        totalPerson: 1,
        grandTotal: 0,
      })

      navigate("/")

    } catch (error) {

      console.log(error)

    }

  }

  if (!selectedTrips) {
    return (
      <Container>
        <Row>
          <Col>
            <Card className="shadow mt-5">
              <Card.Body>
                <Card.Title>Trips Detail not Found</Card.Title>
                <Button variant="primary" onClick={() => navigate(-1)} >Back To Trips</Button>
              </Card.Body>
            </Card></Col>
        </Row>
      </Container>
    )

  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6} >
          <Card className='shadow rounded-5' >
            <Card.Img variant="top" src={selectedTrips.image} className='rounded-5 shadow' style={{ height: "400px" }} />
            <Card.Body className='text-center'>
              <Card.Title>{selectedTrips.name}</Card.Title>
              <Card.Text>
                <h5 className="text-secondary" >{selectedTrips.destination}</h5>
                <div className="d-flex gap-1 justify-content-center align-items-center">
                  <Badge bg="primary" >{selectedTrips.duration}</Badge>
                  <Badge bg="secondary" >{selectedTrips.rating}</Badge>
                  <Badge bg="info" >{selectedTrips.difficulty}</Badge>
                  <Badge bg="success" > ₹{selectedTrips.price}</Badge>
                </div>
              </Card.Text>

            </Card.Body>
          </Card>

        </Col>
        <Col md={6} className='mt-3' >

          <Form onSubmit={handleSubmit}>

            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" value={formData.name} onChange={(e) => handleChange("name", e)} />
            </FloatingLabel>


            <FloatingLabel controlId="floatingPassword" label="Email" className="mb-3">
              <Form.Control type="email" value={formData.email} onChange={(e) => handleChange("email", e)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
              <Form.Control type="phone" value={formData.phone} onChange={(e) => handleChange("phone", e)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPhone" label="Trip Date" className="mb-3">
              <Form.Control type="date" value={formData.tripDate} onChange={(e) => handleChange("tripDate", e)} />
            </FloatingLabel>


            <FloatingLabel controlId="floatingPhone" label="Total Person" className="mb-3">
              <Form.Control type="number" value={formData.totalPerson} onChange={(e) => handleChange("totalPerson", e)} />
            </FloatingLabel>


            <FloatingLabel controlId="floatingPhone" label="Special Request" className="mb-3">
              <Form.Control type="text" value={formData.specialRequest} onChange={(e) => handleChange("specialRequest", e)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPhone" label="Grand Total" className="mb-3">
              <Form.Control type="text" value={`₹ ${formData.grandTotal}`} readOnly />
            </FloatingLabel>
            <div className="d-grid">
              <Button variant='outline-success' type='submit' >Confirm Booking</Button>
            </div>
          </Form>

        </Col>
      </Row>

    </Container>
  )
}

export default BookingsForm