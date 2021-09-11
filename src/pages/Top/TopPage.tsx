import React from 'react';
import { Container, Col, Form, Button, Row, FormControl, InputGroup } from 'react-bootstrap';
import InputForm from '../../components/InputForm/InputForm';

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
                            <InputForm />
                        </Col>
                    </div>
                </div>
            </Container>
        );
    }
}