import React, { useState }  from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class InputForm extends React.Component {
    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Input Text"
                >
                </FormControl>
                <Button
                    variant="primary"
                >
                    Add
                </Button>
            </InputGroup>
        );
    }
}