import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import FactCard from "../components/FactCard.js";
import axios from "axios"
import FactType from "../types/factType.js"
  
const HomeScreen = () => {
	const [facts, setFacts] = useState<FactType[]>([]);

	useEffect(() => {
		const fetchFacts = async () => {
			const { data } = await axios.get<FactType[]>("/api/facts");
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
							<FactCard fact={fact} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default HomeScreen;
