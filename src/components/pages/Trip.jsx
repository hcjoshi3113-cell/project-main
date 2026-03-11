import { Container, Row, Col, Button } from "react-bootstrap";
import { trips } from "../../data/tripsData";
import { useNavigate } from "react-router-dom";

const Trips = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-3">
        <Row xs={1} sm={2} md={3} lg={4} className="g-5">
          {trips.map((t) => (
            <Col key={t.id}>
              <>
                <div className="card shadow rounded-4" style={{ height: "330px" }}>
                  <img
                    src={t.image}
                    className="card-img-top rounded-4 img-fluid"
                    alt={t.name}
                    style={{ height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{t.name}</h5>
                    <Button className="btn btn-primary" onClick={()=>navigate(`/trip/${t.id}`)} > view Details</Button>
                  </div>
                </div>
              </>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Trips;