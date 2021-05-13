import React, {Component} from "react";
import axios from "axios";
import {RegistrationForm} from "./RegistrationForm";
import {Col, Row} from "react-bootstrap";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    sendRegistrationRequest = (data) => {
        axios
            .post("/auth/registration", data)
            .then(this.props.history.replace("/auth/login"))
            .catch(error => console.error(error))
    }

    handleRegistration = (data) => {
        this.sendRegistrationRequest(data);
    }

    render() {
        return(
            <Row>
                <Col md={{span: 5, offset: 3}}>
                    <RegistrationForm registrationSubmit={this.handleRegistration}/>
                </Col>
            </Row>
        )
    }
}

export default Registration;