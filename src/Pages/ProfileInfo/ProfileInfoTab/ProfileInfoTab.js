import React from 'react';
import "./ProfileInfoTab.css"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import baby from "../../../img/baby.png"
import pet from "../../../img/pet.png"
import party from "../../../img/party.png"
import smoking from "../../../img/sm.png"
import BankPayment from '../BankPayment/BankPayment';
import PaypalPayment from '../PaypalPayment/PaypalPayment';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51KJhEFFesKPGWiP3YH9pPx3aDpRX44wil8afCvneKe2ziTVEPoBgXnEFnanssjwK1RbAeyKbQV5kSBYGcjeOsxoB00m0ZXAjF8');

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

const ProfileInfoTab = ({ startdate, enddate }) => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // const day = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]

    return (
        <div className={classes.root}>
            <AppBar position="static" color="#fff" className='appbar'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="#000"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="1.Review house rules" {...a11yProps(0)} className="tablevel" />
                    <Tab label="2.who's coming" {...a11yProps(1)} className="tablevel" />
                    <Tab label="3.confirm and pay" {...a11yProps(2)} className="tablevel" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="reviewrules">
                        <h3>review house rules</h3>
                        <p>4 Night in Dhaka</p>
                        <div className="rulesdate d-flex justify-content-between">
                            <div className="checkin">
                                <small>{new Date(startdate).toDateString()}</small>
                                <p>Check-in <br /> After 12:00 pm</p>
                            </div>
                            <div className="checkout">
                                <small>{new Date(startdate).toDateString()}</small>
                                <p>Checkout <br /> 11:00 am</p>
                            </div>
                        </div>
                        <p>Self check-in with building staff</p>
                        <div className="keepmind">
                            <h5>things to keep in mind</h5>
                            <ul>
                                <li> <img src={baby} className="img-fluid" alt="" /> <span>Suitable for children and infants</span> </li>
                                <li> <img src={pet} className="img-fluid" alt="" /> <span>Pets allowed</span> </li>
                                <li> <img src={party} className="img-fluid" alt="" /> <span> No parties or event</span></li>
                                <li> <img src={smoking} className="img-fluid" alt="" /> <span>Smoking not allowed</span></li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div className="who-coming">
                        <h3>traveling for work</h3>
                        <p className='my-4' >Say hello to youe host <br /> let rowdra know a little about your self and why you are comming </p>
                        <textarea name="sms" id="" cols="20" rows="6" className='w-100 textarea' placeholder='Optional'></textarea>
                        <button className='search-btn mt-4'>continue</button>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Elements stripe={stripePromise}>
                        <BankPayment></BankPayment>
                    </Elements>
                    <PaypalPayment></PaypalPayment>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};

export default ProfileInfoTab;