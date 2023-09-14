import { Helmet } from "react-helmet-async"

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
    </Helmet>
  )
}
Meta.defaultProps = {
    title: "Welcome to animal facts",
    description: "A place for all your fun animal fact needs",
    keywords: "animal, animal facts, fun facts, facts"
}
export default Meta