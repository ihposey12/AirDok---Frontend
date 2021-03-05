import React from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import Button from '@material-ui/core/button'

const RentDates = () => {
    return (
        <div class='ui clearing segment'>
            <DateRangePicker initialSettings={{ startDate: '3/1/2021', endDate: '3/5/2021' }}>
                <Button variant='contained' color='secondary'>Select Dates</Button>
            </DateRangePicker>
            <i class="calendar alternate icon" fontStyle='large'></i>
            <button>Confirm</button>
        </div>
    )
}

export default RentDates