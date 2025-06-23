import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import FactType from "../types/factType";

type FactTableProps = {
    facts: FactType[];
    deleteHandler: (id: string) => void; // Function prop for handling deletes
};
const FactTable = ({ facts, deleteHandler }: FactTableProps) => {
    return (
        <Table
            striped
            hover
            responsive
            className="table-sm"
        >
            <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>ANIMAL</th>
                    <th>SOURCE</th>
                    <th>TEXT</th>
                    <th>MEDIA</th>
                    <th>WIKI</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {facts.map((fact) => {
                    return (
                        <tr key={fact._id}>
                            <td>
                                <Link to={`/fact/${fact._id}`}>{fact._id}</Link>
                            </td>
                            <td>{fact.animal}</td>
                            <td>
                                <Link to={fact.source}>Source</Link>
                            </td>
                            <td className="text-wrap">{fact.text}</td>
                            {fact.media && (
                                <td>
                                    <Link to={fact.media}>Media</Link>
                                </td>
                            )}
                            <td>
                                <Link to={fact.wiki || "#"}>Wikipedia</Link>
                            </td>
                            <td>
                                <LinkContainer to={`/fact/${fact._id}/edit`}>
                                    <Button
                                        variant="primary"
                                        className="btn-sm mx-2"
                                    >
                                        <FaEdit />
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant="danger"
                                    className="btn-sm mx-2 my-2"
                                    onClick={() => {
                                        if (fact._id) {
                                            deleteHandler(fact._id);
                                        }
                                    }}
                                >
                                    <FaTrash style={{ color: "white" }} />
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default FactTable;
