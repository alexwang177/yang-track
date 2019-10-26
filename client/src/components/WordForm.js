import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default class WordForm extends Component {
    

    render() {
        return (
            <div>
                <Form>
                    <FormGroup className='row'>
                        <Label className='col-4'>Keyword: </Label>
                        <Input className='col-4' type='text' name='keyword' id='keyword' placholder='Enter keyword...'></Input>
                        <Button onClick={this.props.getTweets} className='col-4' style={{maxWidth: '100px'}}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
