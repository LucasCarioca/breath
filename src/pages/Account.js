import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {mapDispatchToProps, mapStateToProps} from "../store/reducer";
import {connect} from "react-redux";

class Account extends Component {
    render() {
        return (
            <Container>
                <h1 className={'title'}>Account</h1>
                <Card raised={true}>
                    <CardContent>
                        <p>Your data is only stored locally on your device. There is no information being sent back to our servers. If you would like to erase the data that this app is storing locally on your device click the Forget me button below.</p>
                        <Button variant={'outlined'} color={'secondary'} onClick={this.clearLocalStorage.bind(this)}>Forget Me</Button>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    clearLocalStorage() {
        this.props.clearState();
        alert('We erased your locally stored data.')
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);