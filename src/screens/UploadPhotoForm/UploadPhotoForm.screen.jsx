import React, {useCallback, useState, useContext, useEffect} from 'react';
import Dropzone from 'react-dropzone';
import CloudIcon from '../../assets/images/cloud-computing.png';
import {UserContext} from '../../contexts/userContext';
import { PhotoUploadFormContainer, StyledDiv, MediaPreview } from './UploadPhotoForm.styles';

const PhotoUploadForm = () => {
    const [isError, setIsError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [thumb, setThumb] = useState([]);
    const userData = useContext(UserContext);

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setIsError(false);
        setErrorMessage('');
        acceptedFiles.map(file => 
            setThumb(prevState => [...prevState, Object.assign(file, { preview: URL.createObjectURL(file) })])
        );
    }, []);

    useEffect(() => {
        userData.setThumbLength(thumb.length);
    }, [userData, thumb])

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
        // setThumb([]);
      }, []);

    const removeImage = (index) => {
        setThumb(prevState => prevState.filter((thumb,i) => i !== index));
    }

    return (
        <PhotoUploadFormContainer>
            <div className='price-info'>$10 per image</div>
            <Dropzone multiple={true} maxSize={4000000} onDropAccepted={onDrop} onDropRejected={onDropReject} accept=".png, .jpeg, .jpg">
                {({getRootProps, getInputProps}) => (
                    <StyledDiv className={isError ? 'upload-err' : ''} {...getRootProps({ refKey: 'innerRef' })}>
                        <input {...getInputProps()} />
                        <div className='drag-drop-file-wrp'>
                            <img className='cloud-upload-icon' src={CloudIcon} alt="upload-icon" />
                            <p>
                                Drag 'n' drop one or more files here 
                                <br /> 
                                or 
                                <br />
                                <button className='btn-select-file'>Select One Or More Files</button>
                            </p>                            
                        </div>
                    </StyledDiv>
                )}
            </Dropzone>
            {isError && <span className='error-text'>{errorMessage}</span>}
            <MediaPreview>
                {thumb.map((file, i) => (
                    <div className='thumbnail-preview'>
                        <img src={file.preview} alt="preview" />
                        <div className='remove-icon'>
                            <span role="presentation" onClick={() => removeImage(i)}>X</span>
                        </div>
                    </div>
                ))}
            </MediaPreview>
        <br/>
        </PhotoUploadFormContainer>
    )
};


export default PhotoUploadForm;