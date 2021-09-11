import React from 'react';
import { Container, Col, Form, Button, Row, FormControl, InputGroup } from 'react-bootstrap';

const titleStyle: React.CSSProperties = {
    marginBottom: "30px"
}

export default class TopPage extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Col md={12}>
                        <h1 style={titleStyle}>CSV作成アプリケーション</h1>
                    </Col>
                    <div className="row justify-content-center">
                        <Col md={8}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Input Text"
                                >
                                </FormControl>
                                <Button
//                                    onClick={}
                                    variant="primary"
                                >
                                    Add
                                </Button>
                            </InputGroup>
                        </Col>
                    </div>

                </div>
            </Container>
        );
    }
}