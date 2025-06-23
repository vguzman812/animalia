import type FactType from "./factType";

export default interface AllFactsType {
    facts: FactType[];
    page: number;
    pages: number;
}
