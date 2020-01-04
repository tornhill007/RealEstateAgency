import React, {Component} from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 onClick={() => {this.props.getUser()}}>Welcome to React</h1>
                    <p>{this.props.user !== null ? this.props.user.name : ''}</p>
                </header>
            </div>
        );
    }
}

export default Main;