import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const UploadFile = () => {
    const { register, handleSubmit } = useForm();
    // console.log(register);
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:5000/file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(res));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("file", { required: true })}
                    type="file"
                    name="file"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UploadFile;
