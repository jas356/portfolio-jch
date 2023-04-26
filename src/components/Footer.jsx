import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {

const currentYear= new Date().getFullYear()
const gitHubUrl= "https://github.com/jas356"

    return(
        <>
            <footer>
                <Container>
                    <Row>
                        <Col>
                            <p> &copy; {currentYear} Jasmine Henry</p>
                            <br />
                            <a href={gitHubUrl}
                            target="_blank"
                            rel="nonrefferer">Code in Github</a><p/>
                        </Col>
                    </Row>
                </Container>    
            </footer>
        </>
    )
}