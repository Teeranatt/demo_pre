import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './SearchApp.css'

function SearchApp() {

    const [name, setname] = useState('');

    const handleChange = (event) => {
        setname(event.target.value);
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };


    return (
        <div className="app-bar">
            <div className="name-app">
                Place List
            </div>

            <div className="search-app">
                <Box sx={{ minWidth: 100,minHeight:50 }} varient='round'>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label="ร้านอาหาร"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Restaurant</MenuItem>
                            <MenuItem value={20}>Bakery</MenuItem>
                            <MenuItem value={30}>Cafe</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* <Chip
        label={
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        }
        onClick={handleClick}
        onDelete={handleDelete}
      /> */}
            </div>
        </div>

    );
}
export default SearchApp;