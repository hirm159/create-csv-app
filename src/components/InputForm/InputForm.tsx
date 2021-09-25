import React, { useRef, useState }  from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import InputList from '../../components/InputList/InputList';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import { CSVLink, CSVDownload } from 'react-csv';

const items = [{id:0, value:""}];

export default class InputForm extends React.Component {

    state = {
        id: 0,
        value:"ClearAllボタンを押してから入力して下さい"
    };

    onSubmit = () => {
        if (this.state.value.length === 0) {
            return "";
        } 
        const input = {
            id: items.length + 1,
            value: this.state.value
        }
        items.push(input);
        this.setState({ value: ""});
    }

    clear = () => {
        this.setState({ value: ""});
    }

    clearAll = () => {
        items.length = 0;
        this.setState({ value: ""});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="text"
                                name="inputTitle"
                                placeholder="Input Text"
                                value={this.state.value}
                                onChange={e => this.setState({ value: e.target.value })}
                            >
                            </FormControl>
                            <Button
                                size="lg"
                                variant="primary"
                                onClick={this.onSubmit}
                            >
                                Add
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Button
                            size="lg"
                            variant="warning"
                            onClick={this.clear}
                        >
                            InputClear
                        </Button>
                    </Col>
                    <Col md={4}>
                        <Button
                            size="lg"
                            variant="danger"
                            onClick={this.clearAll}
                        >
                            ClearAll
                        </Button>
                    </Col>
                    <Col md={4}>
                        <CSVLink
                            data={items}
                            className={"btn btn-dark btn-lg"}
                        >
                            CreateCsv
                        </CSVLink>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <InputList items={items} />
                </Row>
            </div>
        );
    }
}
