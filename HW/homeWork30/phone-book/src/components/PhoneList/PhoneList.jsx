import React, {useState} from 'react';
import {array, func} from "prop-types";
import PhoneRecord from "../PhoneRecord/PhoneRecord";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_RECORD} from "../../store/records/actions";

function PhoneList() {

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const dispatch = useDispatch();
    const records = useSelector(state => state.records.data);

    const openDeleteModal = (itemId) => {
        setSelectedItem(itemId);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const handleDelete = (itemId) => {

        const deleteAction = {
            type: DELETE_RECORD,
            payload: itemId
        }

        dispatch(deleteAction);

        // onDeleteFunc(itemId);
        closeDeleteModal();
    }
    return (
        <div>
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
                {records.map(item => (
                    <tr>
                    {Object.entries(item).map(([key, text]) => {
                        if (key !== 'id'){
                            return <td key={key} id={key}>{text}</td>;
                        } else {
                            return null
                        }
                    })}
                    <td>
                        <input type="button" value="Delete (X)" onClick={() => openDeleteModal(item.id)}/>
                    </td>
                </tr>))}
                {/*{records.map(item => (<PhoneRecord key={item.id} item={item} onDelete={onDeleteFunc}></PhoneRecord>))}*/}
            </table>
            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onRequestClose={closeDeleteModal}
                onDelete={() => handleDelete(selectedItem)}
            />
        </div>
    );
}

PhoneList.propTypes = {
    // records: array.isRequired,
    // onDeleteFunc: func.isRequired
}

export default PhoneList;