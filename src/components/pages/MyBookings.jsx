import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/Context'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MyBookings = () => {

  const [bookings, setBookings] = useState([])
  const { user } = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.uid) return;

    const fetchBookings = async () => {
      try {
        const q = query(
          collection(db, "bookings"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setBookings(data);

      } catch (error) {
        console.log("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [user]);

  return (
    <>
      {bookings.length === 0 ? (
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className='mt-5 text-center'>
              <Card className='shadow'>
                <Card.Body>
                  <Card.Title>No trip data found</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/trips")}
                  >
                    Want to book any trip?
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            {bookings.map((b) => (
              <Col md={4} key={b.id}>
                <Card className='mt-5 shadow'>
                  <Card.Body>
                    <Card.Title>Trip Name - {b.tripName}</Card.Title>
                    <Card.Text>
                      <p>Price - {b.tripPrice}</p>
                      <p>Date - {b.tripDate}</p>
                      <p>Total Person - {b.totalPerson}</p>
                      <p>Special Request - {b.specialRequest}</p>
                      <p>Grand Total - {b.grandTotal}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  )
}

export default MyBookings