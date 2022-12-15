import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider({setIsRender, sortByField, rangeValue, setRangeValue}) {


    const handleChange = (event, newValue) => {
        setRangeValue(newValue);
        setIsRender(sortByField().filter((item) => {
            return item.price < rangeValue[1] && item.price > rangeValue[0]
        }))
    };

    return (
        <Box sx={{ width: 450 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={rangeValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // getAriaValueText={'hello'}
            />
        </Box>
    );
}