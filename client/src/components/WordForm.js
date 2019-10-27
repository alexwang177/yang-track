import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default class WordForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queryPhrase: ""
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup className='row'>
                        <Label className='col-4'>Keyword: </Label>
                        <Input className='col-4' type='text' name='keyword' id='keyword' placholder='Enter keyword...' onChange={e => this.setState({ queryPhrase: e.target.value })}></Input>
                        <Button onClick={(e) => this.props.searchTweets(e,this.state.queryPhrase)} className='col-4' style={{maxWidth: '100px'}}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
