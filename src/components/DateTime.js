import React from 'react'
import moment from 'moment'

const today = moment().format('LLL'); 

const displayToday = () => (
    <span> 
        Last Login: {today}
    </span>
)

export default displayToday