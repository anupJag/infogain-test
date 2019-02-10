import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const resultTable = (props) => {
    return(
        <React.Fragment>
            <TableCell>{props._id}</TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.gender}</TableCell>
        </React.Fragment>
    );
};

export default resultTable;