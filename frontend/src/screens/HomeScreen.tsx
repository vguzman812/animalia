import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Fact from "../components/Fact.js";
import axios from "axios"


interface Fact {
    _id: number;
    animal: string;
    source: string;
    text: string;
    media: string;
    wiki: string;
  }
  
const HomeScreen = () => {

	const [facts, setFacts] = useState<Fact[]>([]);

	useEffect(() => {
		const fetchFacts = async () => {
			const { data } = await axios.get<Fact[]>("/api/facts");
			setFacts(data);
		};

        fetchFacts()
	}, []);
	return (
		<>
			<h1>Facts</h1>
			<Row>
				{facts.map((fact) => {
					return (
						<Col sm={12} md={6} lg={4} xl={3} key={fact._id}>
							<Fact fact={fact} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default HomeScreen;
