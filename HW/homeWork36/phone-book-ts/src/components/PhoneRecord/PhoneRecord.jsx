import PropTypes from "prop-types";

function PhoneRecord({item, onDelete}) {

    const handleDelete = () => {
        onDelete(item.id);
    }

    return (
        <tr>
            {Object.entries(item).map(([key, text]) => {
                if (key !== 'id'){
                    return <td key={key} id={key}>{text}</td>;
                } else {
                    return null
                }
            })}
            <td>
                <input type="button" value="Delete (X)" onClick={handleDelete}/>
            </td>
        </tr>
    );
}

PhoneRecord.propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default PhoneRecord;