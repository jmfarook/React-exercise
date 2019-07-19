import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { data } from './table-data';
import Paper from '@material-ui/core/Paper';

const dateValue = [];
const openValue = [];
const highValue = [];
const lowValue = [];
const closeValue = [];
const volumeValue = [];
var index = 0;

class CardComponent extends React.Component {

    componentWillMount() {
        data.forEach((e, index) => {
            dateValue.push(e.Date)
            highValue.push(e.High);
            openValue.push(e.Open);
            lowValue.push(e.Low);
            closeValue.push(e.Close);
            volumeValue.push(e.Volume);

        })
    }
    componentDidMount() {
        document.getElementById('card-link').style.display = 'none';
        document.getElementById('tbl-link').style.display = 'block';
    }
    generateKey(tbl) {

        var key = tbl + '-content' + index;
        index++;
        return key;
    }
    render() {
        return (
            <div>
                <Paper style={{ width: '89%', height: 500, overflowY: 'scroll', overflowX: 'hidden' }} >

                    {/* date value card render */}

                    <Card className='date-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='Date' style={{ borderBottom: '1px solid #e0e0e0' }}  ></CardHeader>
                        <CardContent>
                            {dateValue.map(val =>

                                <Typography key={this.generateKey('datecard')} style={{ borderBottom: '1px solid #e0e0e0' }} >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>

                    {/* high value card render */}
                    <Card className='high-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='High' style={{ borderBottom: '1px solid #e0e0e0' }}  ></CardHeader>
                        <CardContent>
                            {highValue.map(val =>
                                <Typography key={this.generateKey('highcard')} style={{ borderBottom: '1px solid #e0e0e0' }}  >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>


                    {/* open value card render */}
                    <Card className='open-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='Open' style={{ borderBottom: '1px solid #e0e0e0' }} ></CardHeader>
                        <CardContent>
                            {openValue.map(val =>
                                <Typography key={this.generateKey('opencard')} style={{ borderBottom: '1px solid #e0e0e0' }} >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>

                    {/* low value card render */}
                    <Card className='low-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='Low' style={{ borderBottom: '1px solid #e0e0e0' }} ></CardHeader>
                        <CardContent>
                            {lowValue.map(val =>
                                <Typography key={this.generateKey('lowcard')} style={{ borderBottom: '1px solid #e0e0e0' }} >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>

                    {/*close value card render */}
                    <Card className='close-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='Close' style={{ borderBottom: '1px solid #e0e0e0' }}  ></CardHeader>
                        <CardContent>
                            {closeValue.map(val =>
                                <Typography key={this.generateKey('closecard')} style={{ borderBottom: '1px solid #e0e0e0' }} >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>

                    {/* volume value card render */}
                    <Card className='volume-card' style={{ width: 170, margin: '7px', float: 'left' }}>
                        <CardHeader title='Volume' style={{ borderBottom: '1px solid #e0e0e0' }} ></CardHeader>
                        <CardContent>
                            {volumeValue.map(val =>
                                <Typography key={this.generateKey('volumecard')} style={{ borderBottom: '1px solid #e0e0e0' }} >
                                    {val}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Paper>
            </div >)
    }
}

export default CardComponent;