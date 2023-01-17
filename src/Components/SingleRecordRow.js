import React, { useState } from 'react'
import "../App.css"

const SingleRecordRow = ({ data, deleteRecord, id ,setDeleteDialogState }) => {
    const onDelete = () => {
        setDeleteDialogState(true);
        deleteRecord(id)
    }
    return (
        <div className='flex-container'>
            <div className='flex-item'><img src={data.imageSrc} alt="User-Pic" className='imageFormatting'></img></div>
            <div className='flex-item'>{data.name}</div>
            <div className='flex-item'>{data.email}</div>
            <div className='flex-item'>{data.experienceFormated}</div>
            <button className='flex-item' onClick={onDelete}>Delete Record</button>
        </div>
      )
}

export default SingleRecordRow