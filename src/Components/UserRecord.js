import React, { useRef, useState } from 'react'
import RecordList from './RecordList'
import '../App.css'
import { Dialog } from "@mui/material";
import AddNewRecord from './AddNewRecord'
import Records from '../Records'
import DeleteRecords from "../Components/DeleteRecords"



const UserRecord = () => {
    const [listOfRecords, setListOfRecords] = useState([]);
    const [deleteDialogState, setDeleteDialogState] = useState(false);
    const [displayState, setDisplayState] = useState(false);
    const [idToDelete, setidToDelete] = useState(-1);
    const listofrecords = useRef(null);
    const deletedData = listOfRecords.filter((ele, idx) => { return idx === idToDelete });

    const deleteRecord = (id) => { setidToDelete(id) }

    const addRecord = (prevVal) => {
        setListOfRecords((prevRecord) => { return [...prevRecord, prevVal] });
        Records.push(prevVal);
    }

    const openAddNewRecord = () => {
        setDisplayState(true);
    }

    return (
        <div className='initialContainerDiv'>
            {displayState &&
                <Dialog
                    isModal="true"
                    width="500px"
                    onClose={displayState}
                    open={displayState}
                    fullWidth
                    maxWidth="sm"
                >
                    <AddNewRecord addRecord={addRecord} setDisplayState={setDisplayState} />
                </Dialog>}
            <>{deleteDialogState &&
                <Dialog
                    isModal="true"
                    width="500px"
                    onClose={deleteDialogState}
                    open={deleteDialogState}
                    fullWidth
                    maxWidth="xs">
                    <h3 style={{ alignSelf: "center" }}>Delete {deletedData[0].name.toUpperCase()}'s Record</h3>
                    <DeleteRecords setDeleteDialogState={setDeleteDialogState} setListOfRecords={setListOfRecords} idToDelete={idToDelete} />

                </Dialog>}</>
            <div ><button onClick={openAddNewRecord}>Add New</button></div>
            <div><RecordList ref={listofrecords} setDeleteDialogState={setDeleteDialogState} listOfRecords={listOfRecords} deleteRecord={deleteRecord} /></div>
        </div >

    )
}

export default UserRecord