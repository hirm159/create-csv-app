import React from 'react';
import { Container, Col } from 'react-bootstrap';

export default class TopPage extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Col md={12}>
                        <h1>CSV作成アプリケーション</h1>
                    </Col>
                </div>
            </Container>
        );
    }
}