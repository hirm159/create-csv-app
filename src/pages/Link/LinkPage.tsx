import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const titleStyle: React.CSSProperties = {
    marginBottom: "30px"
}

export default class LinkPage extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Col md={12}>
                        <h1 style={titleStyle}>リンク集</h1>
                    </Col>
                    <Row>
                        <Col xs={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>TuneMyMusic</Card.Title>
                                    <Card.Text>
                                        音楽サービス間でのプレイリスト転送を行うことができるサービスです。
                                        サービス内にcsvファイルを読み込む処理がある為、作成したcsvファイルからプレイリストの実装が可能です。
                                    </Card.Text>
                                    <Card.Link target="_blank" href="https://www.tunemymusic.com/jp/">Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>React 公式</Card.Title>
                                    <Card.Text>
                                        React公式（日本語版）
                                    </Card.Text>
                                    <Card.Link target="_blank" href="https://ja.reactjs.org/">Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}