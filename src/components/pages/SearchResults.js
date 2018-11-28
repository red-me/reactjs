import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComicList from '../comics/ComicList';

class SearchResults extends Component {
    render() {
        const { comicList } = this.props;
        const title = (comicList) ? 'Search Result(s)' : '';
        return (
            <div className="container">
                <h4 className="card-title">{title}</h4>
                <ComicList comicList={comicList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        comicList: state.comics.comicList
    }
}

export default connect(mapStateToProps)(SearchResults);