import logo from '../../logo.svg';
import './App.css';
import PhoneList from "../PhoneList/PhoneList";
import {useState} from "react";
import AddForm from "../AddForm/AddForm";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";

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
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav-menu">
                    <Link to="/list">List of contacts</Link>
                    <Link to="/form">Add new contact</Link>
                </div>
                <Routes>
                    <Route path="/form" element={<AddForm onSave={handleClickSave}/>}/>
                    <Route path="/list"
                           element={<PhoneList records={records} onDeleteFunc={handleClickDelete}/>}></Route>
                    <Route path="/" element={<Navigate to="/list"/>}/>
                </Routes>
            </BrowserRouter>

            {/*<input type="button" value="List of contacts" className="button-link"*/}
            {/*       onClick={() => setCurrentRoute('list')}></input>*/}

            {/*<input type="button" value="Add new contact" className="button-link"*/}
            {/*       onClick={() => setCurrentRoute('form')}/>*/}
            {/*{currentRoute === 'list' && <PhoneList records={records} onDeleteFunc={handleClickDelete}></PhoneList>}*/}
            {/*{currentRoute === 'form' &&*/}
            {/*    <AddForm onSave={handleClickSave} onBack={handleClickBack}></AddForm>}*/}
        </div>
    );
}

export default App;
