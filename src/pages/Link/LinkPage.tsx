import React from 'react';
import { Button, Container, Card, Col } from 'react-bootstrap';


export default class LinkPage extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <Col md={12}>
                        <h1>リンク集</h1>
                    </Col>
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
                </div>
            </Container>
        );
    }
}