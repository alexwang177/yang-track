import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

export default class WordForm extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.searchTweets(e);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onFormSubmit}>
                    <FormGroup className='row'>
                        <Label className='col-4'>Keyword: </Label>
                        <Input className='col-4' type='text' name='keyword' id='keyword' placholder='Enter keyword...' onChange={(e) => this.props.updateQuery(e.target.value)}></Input>
                        <Button  type='submit' className='col-4' style={{maxWidth: '100px'}}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
