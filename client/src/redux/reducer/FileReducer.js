// import { POST_FILE, POST_FILE_FAIL, POST_FILE_SUCCESS } from "../actionTypes";

// const init = {
//     File: [],
//     FileLoading: false,
//     error: null,
// };

// export const FileReducer = (state = init, { type, payload }) => {
//     switch (type) {
//         case POST_FILE:
//             return { ...state, FileLoading: true };

//         case POST_FILE_SUCCESS:
//             return {
//                 ...state,
//                 File: [...state.File, payload],
//                 error: null,
//             };
//         case POST_FILE_FAIL:
//             return {
//                 ...state,
//                 error: payload,
//                 FileLoading: false,
//             };
//         default:
//             return state;
//     }
// };
// export default FileReducer;
