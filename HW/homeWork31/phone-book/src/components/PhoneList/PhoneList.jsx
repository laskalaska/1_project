import React from 'react';
import { array, func} from "prop-types";
import PhoneRecord from "../PhoneRecord/PhoneRecord";

function PhoneList({ records, onDeleteFunc }) {
    return (
        <table>
            <tr>
                <th>
                    First name
                </th>
                <th>
                    Last name
                </th>
                <th>
                    Contact number
                </th>
                <th>
                    Actions
                </th>
            </tr>
            {records.map(item => (<PhoneRecord key={item.id} item={item} onDelete={onDeleteFunc}></PhoneRecord>))}
        </table>
    );
}

PhoneList.propTypes = {
    records: array.isRequired,
    onDeleteFunc: func.isRequired
}

export default PhoneList;