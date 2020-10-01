import React from 'react';

const user = (props) =>
{
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
return (<div>
        <h2>Jestem {props.username}</h2>
        <p>Zawód: {props.role}</p>
        <p>{props.children}</p>
        <h2>Aktualny czas: {hour + ':' + minute + ':' + second}</h2>
    </div>)
}

export default user;