import React, {Component} from 'react';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../store/reducer";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class BreathRecord extends Component {
    render() {
        let breathRecords = this.props.breathRecords.reverse().map((record, index) => {
            return (
                <TableRow key={index}>
                    <TableCell align={'left'}>{record.time}</TableCell>
                    <TableCell align={'left'}>{record.bpm}</TableCell>
                </TableRow>
            )
        });
        return (
            <Container maxWidth={'lg'}>
                <h1 className={'title'}>Breath record</h1>
                {this.props.breathRecords.length > 0? (
                    <Card raised={true}>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align={'left'}>Date & Time</TableCell>
                                        <TableCell align={'left'}>BPM</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {breathRecords}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                ): null}
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreathRecord);