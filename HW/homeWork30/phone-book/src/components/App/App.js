import logo from '../../logo.svg';
import './App.css';
import PhoneList from "../PhoneList/PhoneList";
import {useState} from "react";
import AddForm from "../AddForm/AddForm";

const defaultPhoneRecords = [
    {
        id: 1,
        firstName: "Leanne",
        lastName: "Graham",
        phone: "110-692-6593",
    },
    {
        id: 2,
        firstName: "Ervin",
        lastName: "Howell",
        phone: "310-545-6582",
    },
    {
        id: 3,
        firstName: "John",
        lastName: "Doe",
        phone: "520-542-1462",
    }
];

function App() {
    const [currentRoute, setCurrentRoute] = useState('list');
    const [records, setRecords] = useState(defaultPhoneRecords);

    const handleClickDelete = (recordId) => {
        const updatedRecords = records.filter(record => record.id !== recordId)
        setRecords(updatedRecords);
    }

    const handleClickSave = (newContact, routeState) => {
        setRecords([
            ...records,
            newContact
        ]);
        setCurrentRoute(routeState);
    }

    const handleClickBack = (routeState) => {
        setCurrentRoute(routeState);
    }

    return (
        <div className="App">
            <div className="nav-menu">
                <input type="button" value="List of contacts" className="button-link"
                       onClick={() => setCurrentRoute('list')}></input>
                <input type="button" value="Add new contact" className="button-link"
                       onClick={() => setCurrentRoute('form')}/>
            </div>
            {currentRoute === 'list' && <PhoneList records={records} onDeleteFunc={handleClickDelete}></PhoneList>}
            {currentRoute === 'form' &&
                <AddForm onSave={handleClickSave} onBack={handleClickBack}></AddForm>}
        </div>
    );
}

export default App;
