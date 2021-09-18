import React, { useRef, useState }  from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import InputList from '../../components/InputList/InputList';

const items = [{id:0, value:""}];

export default class InputForm extends React.Component {

    state = {
        id: 0,
        value:""
    };

    onSubmit = () => {
        const input = {
            id: 0,
            value: this.state.value
        }
        items.push(input);
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        type="text"
                        name="inputTitle"
                        placeholder="Input Text"
                        onChange={e => this.setState({ value: e.target.value })}
                    >
                    </FormControl>
                    <Button
                        variant="primary"
                        onClick={this.onSubmit}
                    >
                        Add
                    </Button>
                </InputGroup>

                <InputList items={items} />
            </div>
        );
    }
}
