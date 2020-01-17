import React from 'react';
import classes from "../Catalog.module.css";


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'byDate'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Sort by: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.itemFormWrap}>
            <form onSubmit={this.handleSubmit}>
                <label className={classes.label}>
                    Sort by:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="byDate">By date (new - old)</option>
                        <option value="byPriceUp">By price (min - max)</option>
                        <option value="byPriceDown">By price (max - min)</option>
                        <option value="byPricePerUp">By price per m2 (min - max)</option>
                        <option value="byPricePerDown">By price per m2 (max - min)</option>
                        <option value="byAreaUp">By area (min - max)</option>
                        <option value="byAreaDown">By area (max - min)</option>
                    </select>
                </label>
                <div className={classes.submitWrap}>
                    <input type="submit" value="Ok" className={classes.submit}/>
                </div>
            </form>
            </div>

        );
    }
}

export default FlavorForm;