// import {useCallback, useState} from 'react'
// import {useDropzone} from 'react-dropzone'
//
// export const MyDropzoneSingleFile = ({file}) => {
//     const [value, setValue] = useState(file)
//     const onDrop = useCallback(acceptedFiles => {
//         setValue(acceptedFiles)
//     }, [])
//     const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
//
//     return (
//         <div {...getRootProps()} style={{
//             border: '1px solid rgba(255, 255, 255, 0.23)',
//             padding: '20px',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             textAlign: 'center',
//         }}>
//             <input {...getInputProps()} />
//             {
//                 isDragActive ?
//                     <p>Drop the Image here ...</p> :
//                     <p>Upload Thumbnail</p>
//             }
//         </div>
//     )
// }
// export const MyDropzoneMultipleFiles = () => {
//     const onDrop = useCallback(acceptedFiles => {
//         // Do something with the files
//     }, [])
//     const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, multiple: true})
//
//     return (
//         <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             {
//                 isDragActive ?
//                     <p>Drop the files here ...</p> :
//                     <p>Drag 'n' drop some files here, or click to select files</p>
//             }
//         </div>
//     )
// }