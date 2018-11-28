import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchComics } from '../../store/actions/comicActions';


class SearchBox extends Component {
    state = {
        keyword: ''
    }
    handleClick = (e) => {
        this.props.searchComics(this.state);
    }
    handleChange = (e) => {
        if (e.keyCode === 13){
            this.props.searchComics(this.state);
            return;
        }
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })

    }
    render(){
        return(
            <div className="container">
                <div className="input-field">
                    <input type="text" id="keyword" onChange={this.handleChange} onKeyUp={this.handleChange} placeholder="Ex: Wolverine, Deadpool, Iron man, Captain America, Infinity war" />
                    {/* <label htmlFor="title">Search comics</label> */}
                    <i className="search-btn material-icons prefix" onClick={this.handleClick}>search</i>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        searchComics: (keyword) => dispatch(searchComics(keyword))
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);