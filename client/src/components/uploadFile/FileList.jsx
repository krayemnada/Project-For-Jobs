import React from "react";
import FileItem from "./FileItem";

const FileList = ({ files }) => {
    return (
        <div>
            <ul className="file-list">
                {files && files.map((f) => <FileItem key={f.name} file={f} />)}
            </ul>
        </div>
    );
};

export default FileList;
