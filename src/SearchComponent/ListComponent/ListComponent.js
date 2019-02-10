import React from 'react';
import Results from './ResultTable/ResultTable';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const listComponent = (props) => {

    const checkIfDataPresent = !(props.data && props.data.length > 0) ? <div>Sorry No Matches Found</div> : <Table>
        <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>GENDER</TableCell>
        </TableHead>
        <TableBody>
            {
                props.data.map(el =>
                    <TableRow key={el._id}>
                        <Results
                            key={el._id}
                            _id={el._id}
                            name={el.name}
                            gender={el.gender}
                        />

                    </TableRow>
                )
            }
        </TableBody>
    </Table>

    return (
        checkIfDataPresent
    );
};

export default withStyles(styles)(listComponent);