import React, { useState, Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

interface ListItemProps {
    items: {id: number, value: string}[]
}

const columns = [
    { dataField: "id", text:"id", sort: false, editable:false },
    { dataField: "value", text:"value", sort:false, editable:false},
]

const InputList: React.FC<ListItemProps> = props => {
    return (
        <div>
            <BootstrapTable
                data={props.items}
                columns={columns}
                keyField="id"
                bootstrap4={true}
                bordered={true}
            />
        </div>
    )
}

export default InputList;
