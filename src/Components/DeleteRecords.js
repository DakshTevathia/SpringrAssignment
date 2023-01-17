import React from 'react'

const DeleteRecords = ({ setDeleteDialogState, setListOfRecords, idToDelete }) => {
    ;

    const deleteRecord = (id) => {
        return (
            setListOfRecords((prevRecord) => {
                return prevRecord.filter((recordItem, indx) => { return indx !== id })
            }
            )
        )
    }

    const cancelDelete = () => {
        setDeleteDialogState(false);
    }

    const confirmDelete = () => {
        setDeleteDialogState(false);
        deleteRecord(idToDelete);
    }

    return (
        <div className="flex-container-btn">
            <div className="flex-item-btn"><button onClick={cancelDelete}>Cancel</button></div>
            <div className="flex-item-btn"><button onClick={confirmDelete}> Confirm</button></div>
        </div >
    )
}

export default DeleteRecords