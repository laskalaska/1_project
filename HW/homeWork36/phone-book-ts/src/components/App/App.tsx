import './App.css';
import PhoneList from "../PhoneList/PhoneList";
import AddForm from "../AddForm/AddForm";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav-menu">
                    <Link to="/list">List of contacts</Link>
                    <Link to="/form">Add new contact</Link>
                </div>
                <Routes>
                    {/*<Route path="/form" element={<AddForm onSave={handleClickSave}/>}/>*/}
                    <Route path="/form" element={<AddForm/>}/>
                    <Route path="/list"
                           // element={<PhoneList records={records} onDeleteFunc={handleClickDelete}/>}></Route>
                           element={<PhoneList/>}></Route>
                    <Route path="/" element={<Navigate to="/list"/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
