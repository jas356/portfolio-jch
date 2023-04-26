import { Col, Container, Row} from "react-bootstrap";

export default function About() {
    return(
        <>
        <section>
           <Container className="bg-danger">
            <Row>
                <Col>
                    <img src="https://picsum.photos/300/300" 
                    alt="profile picture" />
                </Col>

                <Col>
                    <h1>Hi I am Jasmine</h1>
                    <p>I love to create art, ceramics, and coding projects.</p>
                    <p>Contact me: Jasminehenry356@gmail.com</p>
                </Col>
            </Row>
           </Container>
        </section>
        </>
    )
}