import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import '../components/cards.css';
import React from 'react';

import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import c5 from '../images/c5.png';
import c6 from '../images/c6.png';


function Cards(){
    return(
        <>
        <Container>
            <Row className= 'mt-4'>
                <Col lg={4}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c1} />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant=''>Sun-sational Trends</Button>
      </Card.Body>
    </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c2} />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant="">Too Hot To Handle</Button>
      </Card.Body>
    </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c3} />
      <Card.Body className="d-flex align-items-center justify-content-center">
       <Button variant="">Hidden Gems</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>

            <Row className= 'mt-4'>
                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c4} />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant="">A Fling with the West</Button>
      </Card.Body>
    </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c5} />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant="">Summer Voyage Companions</Button>
      </Card.Body>
    </Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={c6} />
      <Card.Body className="d-flex align-items-center justify-content-center">
        <Button variant="">Kids Just Wanna Have Fun</Button>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>

        <Container fluid>
            
        </Container>
        </>
    )
}
export default Cards;