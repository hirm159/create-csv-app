import React, { useState } from 'react';

interface ListItemProps {
    items: {id: number, title: string}[]
}

const InputList: React.FC<ListItemProps> = props => {
    return (
        <ul>
            {props.items.map(list => (
                <li key={list.id}>{list.title}</li>
            ))}
        </ul>
    )
}

export default InputList;
