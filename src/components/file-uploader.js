import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    onDrop(files) {
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsDataURL = reader.result;
                
                this.setState({
                    files: [...this.state.files, fileAsDataURL]
                });
            };
            
            reader.readAsDataURL(file);
        });
    }

    render() {
        return (
            <div className="dropzone">
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <p>Drag here or click to select file</p>
                </Dropzone>
            </div>
        )
    }
}

export default FileUploader;