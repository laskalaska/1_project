import PropTypes from "prop-types";

export default function News({title, content, views = 0}) {
    return(
        <div>{title} - {content}, views: {views}</div>
    )
}

News.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    views: PropTypes.number
}