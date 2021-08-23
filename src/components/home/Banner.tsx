import React from "react";
import {
  Card,
  Carousel,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import banner1 from "assets/images/banner1.png";
import banner2 from "assets/images/banner2.png";
import banner3 from "assets/images/banner3.jpg";
import banner4 from "assets/images/banner4.jpg";
const Banner = () => {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={9} className="mt-3">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={banner1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={banner2} alt="Second slide" />
            </Carousel.Item>
          </Carousel>

          <Row className="mt-3">
            <Col md={6} className="mb-3">
              <Card>
                <Card.Img height={120} variant="top" src={banner3} />
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card>
                <Card.Img height={120} variant="top" src={banner4} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
