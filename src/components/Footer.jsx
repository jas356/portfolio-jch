import { Container, Row, Col } from "react-bootstrap"
import { Github } from "react-bootstrap-icons"


export default function Footer() {

const currentYear= new Date().getFullYear()
const gitHubUrl= "https://github.com/jas356"


    return(
        <>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <a>
                            <br />
                            <a href={gitHubUrl}
                            target="_blank"
                            rel="nonrefferer"
                            className="button-effect">Code in Github</a><p/>
                            <Github size="60" color="black" />
                            </a>
                            <small> &copy; {currentYear} Jasmine Henry</small>
                        </Col>
                    </Row>
                </Container>    
            </footer>
        </>
    )
}