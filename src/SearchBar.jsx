import React, { Component } from 'react';
import './App.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Glyphicon} from 'react-bootstrap';

function validate(input){
    return{
        input: input.length === 0,
    };
}

class SearchBar extends Component{

    
    constructor(props){
        super(props);
        this.TextInput = React.createRef();
        this.state = {
            input: '',

            everFocusedInput: false,
            inFocus: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt){
        this.setState({
            input: evt.target.value
        });
    }

    canBeSubmitted() {
        const errors = validate(this.state.input);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    focusTextInput = () => {
        this.TextInput.current.focus();
    }

    onSearch = () => {
        this.props.onSearch(this.TextInput.current.value);
    }

    componentDidMount() {
        this.focusTextInput();
    }


    render(){
        const errors = validate(this.state.input);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-color">
                <div className="input-group col-md-4 container text-center">
                        <input  ref={this.TextInput} 
                                name="search" 
                                className={errors.input ? "error form-control" : "form-control py-2"} 
                                type="text" id="example-search-input" 
                                placeholder="Search for..." 
                                value={this.state.input}
                                onChange={this.handleInputChange}
                        />
                        <span className="input-group-append">
                            <button disabled={isDisabled} onClick={this.onSearch} className="btn btn-primary" type="button">
                                <Glyphicon className="glyph" glyph="search" />
                            </button>
                        </span>
                </div>
            </nav>
        );
    }
}

export default SearchBar;