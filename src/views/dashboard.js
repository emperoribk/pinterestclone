import React from 'react';
import PinButton from '../components/button/index.js';
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
    <>
    <div style={{ display: "flex" }}>
    <div style={{marginLeft: "auto"}}>
    <PinButton variant="primary"> Log in</PinButton> 
    <PinButton variant="secondary"> Sign up</PinButton> 
    </div>
    </div>
    </>
)
}

export default Dashboard;