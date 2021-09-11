import React from 'react';
import { Container, Col } from 'react-bootstrap';
import InputForm from '../../components/InputForm/InputForm';
import InputList from '../../components/InputList/InputList';

const titleStyle: React.CSSProperties = {
    marginBottom: "30px"
}

const items = [{id:0, title:""}];

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
                        <Col md={8}>
                            <InputList items={items} />
                        </Col>
                    </div>
                </div>
            </Container>
        );
    }
}