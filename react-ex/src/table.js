import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { data } from './table-data';

function createData(Date, Open, High, Low, Close, Volume) {
    return { Date, Open, High, Low, Close, Volume };
}

const rows = []
var index = 0;
for (let count = 0; count < data.length; count++) {
    rows.push(createData(data[count].Date, data[count].Open, data[count].High, data[count].Low, data[count].Close, data[count].Volume))
}


class TableComponent extends React.Component {

    componentDidMount() {
        document.getElementById('tbl-link').style.display = 'none';
        document.getElementById('card-link').style.display = 'block';
    }
    generateKey() {

        var key = 'tbl-row' + index;
        index++;
        return key;
    }

    render() {
        return (
            <div>
                <Paper style={{ width: 1200, height: 500, overflow: "scroll" }} >
                    <Table style={{ width: 1190, height: 500 }}>
                        <TableHead >
                            <TableRow >
                                <TableCell className='tbl-row' align="right">Date</TableCell>
                                <TableCell className='tbl-row' align="right">Open</TableCell>
                                <TableCell className='tbl-row' align="right">High</TableCell>
                                <TableCell className='tbl-row' align="right">Low</TableCell>
                                <TableCell className='tbl-row' align="right">Close</TableCell>
                                <TableCell className='tbl-row' align="right">Volume</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={this.generateKey()}>

                                    <TableCell align="right">{row.Date}</TableCell>
                                    <TableCell align="right">{row.Open}</TableCell>
                                    <TableCell align="right">{row.High}</TableCell>
                                    <TableCell align="right">{row.Low}</TableCell>
                                    <TableCell align="right">{row.Close}</TableCell>
                                    <TableCell align="right">{row.Volume}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default TableComponent;
