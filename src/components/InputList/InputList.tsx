import React, { useState, Component } from 'react';

interface ListItemProps {
    items: {id: number, value: string}[]
}

const InputList: React.FC<ListItemProps> = props => {
    return (
        <ul>
            {props.items.map(list => (
                <li key={list.id}>{list.value}</li>
            ))}
        </ul>
    )
}

export default InputList;
