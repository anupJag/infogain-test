import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const searchInputTextBox = (props) => {
    return (
        <div>
            <TextField
                label="Search"
                value={props.searchText}
                onChange={props.onSerachInputChange}
            />
            <Button variant="contained" color="default" onClick={props.onSearchButtonClickHandler}>
                Search
            </Button>
        </div>
    );
};


export default searchInputTextBox;