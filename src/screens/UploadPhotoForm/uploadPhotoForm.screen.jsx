import React, {useCallback, useState} from 'react';
import Dropzone from 'react-dropzone';
import CloudIcon from '../../assets/images/cloud-computing.png';
import { PhotoUploadFormContainer, StyledDiv } from './UploadPhotoForm.styles';

const PhotoUploadForm = () => {
    const [isError, setIsError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [thumb, setThumb] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setIsError(false);
        setErrorMessage('');
        setThumb(acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    }, []);

    const onDropReject = useCallback(acceptedFiles => {
        // Do something with the files
        setIsError(true);
        const {code, message} = acceptedFiles[0]?.errors[0];
        let errorMessage = 'Invalid file';
        switch(code){
            case 'file-invalid-type':
                errorMessage = message;
                break;
            case 'file-too-large':
                errorMessage = 'File is currently larger than 4MB -- Images must be smaller than 4MB for upload';
                break;
            default: break;
        }
        setErrorMessage(errorMessage);
        setThumb([]);
      }, []);
    return (
        <PhotoUploadFormContainer>
        <br/>
        <Dropzone multiple={false} maxSize={4000000} onDropAccepted={onDrop} onDropRejected={onDropReject} accept=".png, .jpeg, .jpg">
            {({getRootProps, getInputProps}) => (
                <StyledDiv className={isError ? 'upload-err' : ''} {...getRootProps({ refKey: 'innerRef' })}>
                    <input {...getInputProps()} />
                    {!thumb.length && 
                        <div className='drag-drop-file-wrp'>
                            <img className='cloud-upload-icon' src={CloudIcon} alt="upload-icon" />
                            <p>
                                Drag 'n' drop some files here 
                                <br /> 
                                or 
                                <br />
                                <button className='btn-select-file'>Select File</button>
                            </p>
                            
                        </div>
                    }                   
                    <div className="media-preview">
                        {thumb.map(file => (
                            <img src={file.preview} alt="preview" />
                        ))}
                    </div>
                </StyledDiv>
            )}
        </Dropzone>
        {isError && <span className='error-text'>{errorMessage}</span>}
        <br/>
        </PhotoUploadFormContainer>
    )
};


export default PhotoUploadForm;