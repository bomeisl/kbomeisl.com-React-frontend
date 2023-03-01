import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return(
        <div>
            <h1> Loading Projects from Django REST API </h1>
            <ReactLoading height={667} width={375} />
        </div>
    )
};

export default Loading;