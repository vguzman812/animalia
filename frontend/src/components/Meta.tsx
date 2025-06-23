import { Helmet } from "react-helmet-async";
import type MetaType from "../types/metaType";

const Meta = ({ title, description, keywords }: MetaType) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
            <meta
                name="keywords"
                content={keywords}
            />
        </Helmet>
    );
};
Meta.defaultProps = {
    title: "Animalia - One Stop Shop for user-created and upvoted animal facts.",
    description: "A place for all your fun animal fact needs",
    keywords: "animal, animal facts, fun facts, facts, animalia",
};
export default Meta;
