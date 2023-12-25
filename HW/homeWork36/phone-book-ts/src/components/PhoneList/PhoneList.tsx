import React, {useEffect, useState} from 'react';
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, deleteItem, fetchRecords, RootState} from "../../store/records/recordsSlice";
import {Contact} from "../../types";

function PhoneList() {

    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const dispatch: AppDispatch = useDispatch();
    const records: Contact[] = useSelector((state: RootState) => state.records.contacts);

    useEffect(() => {
        if (records.length === 0){
            dispatch(fetchRecords());
        }
    }, [])


    const openDeleteModal = (itemId: number): void => {
        setSelectedItem(itemId);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const handleDelete = (itemId: number | null): void => {

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
                {Object.values(records).map((item: Contact) => {
                    return (
                        <tr key={item.id}>
                            {Object.entries(item).map(([key, text]) => {
                                if (key !== 'id') {
                                    return <td key={key} id={key}>{text}</td>;
                                } else {
                                    return null
                                }
                            })}
                            <td>
                                <input type="button" value="Delete (X)" onClick={() => openDeleteModal(item.id)}/>
                            </td>
                        </tr>);
                })}
            </table>
            {isDeleteModalOpen && (<DeleteConfirmationModal
                onRequestClose={closeDeleteModal}
                onDelete={() => handleDelete(selectedItem)}
            />)}
        </div>
    );
}


export default PhoneList;