import React, {useEffect, useState} from 'react';
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, fetchRecords} from "../../store/records/recordsSlice";
import {selectAllRecords, selectTotalRecords} from "../../store/records/recordsSelectors";

function PhoneList() {

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const dispatch = useDispatch();
    const recordsAmount = useSelector(selectTotalRecords);
    const records = useSelector(selectAllRecords);
    // const records = useSelector(state => state.records.entities);

    useEffect(() => {
        if (!recordsAmount){
            dispatch(fetchRecords());
        }
    }, [])


    const openDeleteModal = (itemId) => {
        setSelectedItem(itemId);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const handleDelete = (itemId) => {

        dispatch(deleteItem(itemId));

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
                {Object.values(records).map(item => (
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
            </table>
            {isDeleteModalOpen && (<DeleteConfirmationModal
                onRequestClose={closeDeleteModal}
                onDelete={() => handleDelete(selectedItem)}
            />)}
        </div>
    );
}


export default PhoneList;