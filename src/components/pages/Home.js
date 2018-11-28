import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComicList from '../comics/ComicList';

class Home extends Component {
    render(){
        const { comicList } = this.props;
        return(
            <div className="container">
                Home Page is here...
                <ComicList comicList={comicList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        comicList: state.comics.comicList
    }
}

export default connect(mapStateToProps)(Home);