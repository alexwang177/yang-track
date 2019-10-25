import React, { Component } from 'react'
import {Jumbotron, Container} from 'reactstrap'

export default class Title extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1>YangTrack</h1>
                        <p>Track sentiment about Andrew Yang for specific keywords</p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
