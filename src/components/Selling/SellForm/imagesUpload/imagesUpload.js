import React from 'react';

export class ImageUpload extends React.Component {
    state = {
        files: []
    }

    fileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.files, ...e.target.files] })
    }

    render() {
        return (
            <form>
                <div><h3>Upload images</h3></div>
                <input type="file" multiple onChange={this.fileSelectedHandler} />
            </form>
        )
    }
}
