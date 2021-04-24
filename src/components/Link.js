import React from 'react';

const Link = (props) => {
    const {url, title, target} = props.data;
    return(
        <p>
            <a href={url} target={target}>{title}</a>
        </p>
    )
}

export default Link;