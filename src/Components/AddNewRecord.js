import { useState, useRef, useEffect } from "react"

const AddNewRecord = ({ addRecord, setDisplayState }) => {
    const dateOfLeaving = useRef(null);
    const [data, setData] = useState({
        name: "",
        email: "",
        dateJoining: "",
        dateLeaving: "",
        imageSrc: "",
        experienceFormated: "",
        checkbox: false,
    })

    useEffect(() => {
        if (data.dateJoining && data.dateLeaving) {
            const dateJoiningArray = data.dateJoining.split("-");
            const dateLeavingArray = data.dateLeaving.split("-");
            const totalExperienceInMonths = (dateLeavingArray[0] - dateJoiningArray[0]) * 12 + (dateLeavingArray[1] - dateJoiningArray[1]);
            const experienceFormat = `${Math.floor(totalExperienceInMonths / 12)}Years & ${totalExperienceInMonths % 12}Months`;
            setData({
                ...data,
                experienceFormated: experienceFormat
            });
        }

    }, [data])


    const checkValidationAllFields = () => {
        let boolval;
        if (data.name !== "" && data.email !== "" && data.dateJoining !== "" && data.dateLeaving !== "" && data.imageSrc !== "") {
            boolval = true;
        }
        else {
            boolval = false;
        }
        return boolval;
    }

    const saveData = () => {
        if (checkValidationAllFields()) {
            setDisplayState(false);
            addRecord(data);
        }
        else {
            alert("All Fields Required")
        }

    }
    const [disabledLeavingDate, setdisabledLeavingDate] = useState("")

    const eventChanged = (event, property) => {
        let value;
        if (property === "checkbox") {
            if ((event.target.checked)) {
                setdisabledLeavingDate("disabled")
                value = event.target.checked;
                var today = new Date();
                var todaysCurrentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                dateOfLeaving.current.value = "";
                setData({
                    ...data,
                    dateLeaving: todaysCurrentDate,
                    [property]: value
                });

            }
            else {
                setdisabledLeavingDate("")
                value = event.target.checked;
                setData({
                    ...data,
                    dateLeaving: "",
                    [property]: value
                });

            }
        }
        else {
            value = event.target.value;
            setData({
                ...data,
                [property]: value
            });

        }

    }
    const onImageChange = (e) => {
        const [file] = e.target.files;
        setData({
            ...data,
            imageSrc: URL.createObjectURL(file)
        });
    };

    const cancelClicked = () => {
        setDisplayState(false);
    }
    return (
        <div className="addNewRecordsGridContainer">
            <div>
                <h3>Add New Record</h3>
            </div>
            <div className="inputRecordsGridContainer">

                <div className="inputRecordGridItemLabel">Full Name</div><input type="text" onChange={(e) => { eventChanged(e, "name") }} className="inputRecordGridItemValue" />

                <div className="inputRecordGridItemLabel"> Email</div><input type="text" onChange={(e) => eventChanged(e, "email")} className="inputRecordGridItemValue" />
                <div className="inputRecordGridItemLabel">Date of Joining</div><input type="date" onChange={(e) => eventChanged(e, "dateJoining")} className="inputRecordGridItemValue" />
                <div className="inputRecordGridItemLabel ">Date of Leaving</div><input type="date" ref={dateOfLeaving} onChange={(e) => eventChanged(e, "dateLeaving")} disabled={disabledLeavingDate} className="inputRecordGridItemValuLeaving " />
                <div className="inputRecordGridItemLabelStillWorking">Still Working</div><input type="checkbox" onChange={(e) => eventChanged(e, "checkbox")} className="inputRecordGridItemValueStillWorking" />
                <div className="inputRecordGridItemLabel">Image</div>
                <input type="file" onChange={onImageChange} accept="image/*" className="inputRecordGridItemValue" />
                {/* </input>  <input type="text" onChange={(e) => eventChanged(e, "imageSrc")} className="inputRecordGridItemValue" /> */}


            </div>
            <div className="flex-box-butons">
                <div className="flex-item-button"><button onClick={cancelClicked}>Cancel</button></div>
                <div className="flex-item-button"><button onClick={saveData}>Save</button></div>
            </div>
        </div>
    )
}

export default AddNewRecord