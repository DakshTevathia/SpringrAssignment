import React from 'react'
import SingleRecordRow from "./SingleRecordRow"
import Records from "../Records"

const RecordList = ({ listOfRecords, deleteRecord, setDeleteDialogState }) => {

    return (
        <>   {
            listOfRecords.length !== 0 ?
                <div>
                    {listOfRecords.map((ele, idx) => (< SingleRecordRow key={idx} id={idx} data={ele} deleteRecord={deleteRecord} setDeleteDialogState={setDeleteDialogState} />))}
                    {/* {Records.map((ele) => (< SingleRecordRow data={ele} />))} */}

                </div>
                : <h3 style={{ display: "flex", justifyContent: "center" }}>"No Data, Please Add Data "</h3>
        }
        </>

    )
}

export default RecordList
