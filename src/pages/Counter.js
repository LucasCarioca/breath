import React, {Component} from 'react';
import TinyTimer from 'tiny-timer'
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../store/reducer";
import moment from "moment";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FavoriteIcon from '@material-ui/icons/Favorite';



class Counter extends Component {

    state = {
        countDown: 30,
        breath: 0,
        started: false
    };

    timer = new TinyTimer();

    constructor(props) {
        super(props);
        this.timer.on('tick', this.countDown.bind(this));
        this.timer.on('done', this.done.bind(this));
    }

    render() {
        return (
            <Container maxWidth={'lg'}>
                <h1 className={'title'}>Counter</h1>
                <Card raised={true}>
                    <CardContent>
                        <h3>Breaths: {this.state.breath}</h3>
                        <h4>Timer: {this.state.countDown}s {this.state.started? 'running' : null}</h4>
                        <Button variant={'contained'} color={'primary'} className={'breathButton'} onClick={this.breath.bind(this)}><FavoriteIcon fontSize={'large'}/></Button>
                    </CardContent>
                </Card>
            </Container>
        )
    }


    breath() {
        let started = this.state.started;
        let breath = this.state.breath;
        if (!started) {
            started = !started;
            this.timer.start(30 * 1000)
        }
        this.setState({
            started: started,
            breath: breath+1
        })
    }

    countDown() {
        let countDown = this.state.countDown;
        this.setState({
            countDown: countDown-1
        });
    };

    done() {
        const bpm = this.state.breath*2;
        bpm >= 30 ? alert(`WARNING: ${bpm} breaths per minute. Please advise you primary veterinarian.`) : alert(`${bpm} breaths per minute.`);
        this.props.addBreathRecord({
            time: moment().format('MM/DD/YYYY hh:mm a'),
            bpm: bpm
        });
        this.setState({
            countDown: 30,
            breath: 0,
            started: false
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
