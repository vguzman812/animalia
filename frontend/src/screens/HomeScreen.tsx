import { Row, Col } from "react-bootstrap";
import sampleFacts from "../assets/data/sample.js";
import Fact from "../components/Fact.js";

const HomeScreen = () => {
    console.log(sampleFacts)
    return(
        <>
            <h1>Facts</h1>
            <Row>
                {sampleFacts.map((fact) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={fact._id}>
                            <Fact fact={fact}/>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default HomeScreen;
