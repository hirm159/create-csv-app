import React from 'react';
import { Container, Col } from 'react-bootstrap';
import InputForm from '../../components/InputForm/InputForm';
import InputList from '../../components/InputList/InputList';
import { Header } from '../../components/index';

const titleStyle: React.CSSProperties = {
    marginBottom: "30px"
}

export default class TopPage extends React.Component {
    render() {
        return (
            <Container>
                <Header />
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