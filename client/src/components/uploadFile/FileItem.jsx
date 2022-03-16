import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAlt,
    faSpinner,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
const FileItem = ({ file, deleteFile }) => {
    return (
        <div>
            <li className="file-item" key={file.fileName}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.fileName}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="fa-spin"
                            onClick={() => deleteFile(file.name)}
                        />
                    )}
                    {!file.isUploading && (
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => deleteFile(file.name)}
                        />
                    )}
                </div>
            </li>
        </div>
    );
};

export default FileItem;
