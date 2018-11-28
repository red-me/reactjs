import React from 'react';

const comicList = ({comicList}) => {
    return(
        <div className="section">
            <div className="row">
            {comicList && comicList.map( comic => {
                const imgsrc = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
                const dt = new Date(comic.modified);
                const mdy = `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`
                return (
                    <div className="col s6" key={comic.id}>
                        <div className="card large">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={imgsrc} alt={comic.id} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{comic.title}<i className="material-icons right">more_vert</i></span>
                                <p>{mdy}</p>
                            </div>
                            <div className="card-action">
                                <a href="/">Add To Collection</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{comic.title}<i className="material-icons right">close</i></span>
                                <p>{comic.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default comicList;
