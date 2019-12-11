import React, {useState} from "react";
import {Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const MemberForm = props => {
    const setTeam= props.setTeam;
    const [person, setPerson] = useState({name= "", role: "", email: ""});
    const eventHandler = event => {
        setPerson({...person, [event.target.name]: event.target.value});
    };

    const submitHandler = event => {
        event.preventDefault();
        setTeam(team => [...team, person]);
        setPerson({name: '', role: '', email: ''});
    };
    console.log(props);

    return(
        <Form onSubmit={submitHandler}>
            <FormGroup row>
                <Label for="name">Name:</Label>
                <Col sm={12}>
                    <Input
                        required="true"
                        type="name"
                        placeholder="name"
                        value={person.name}
                        onChange={eventHandler}
                    />
                </Col>
            </FormGroup>
        </Form>

    )
}