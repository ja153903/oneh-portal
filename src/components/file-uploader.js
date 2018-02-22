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
        this.setState({
            files: [...this.state.files, files]
        })
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