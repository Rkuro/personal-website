import React from 'react';
import Typography from '@material-ui/core/Typography';
import { globalStyles } from '../src/GlobalStyles';
import clsx from 'clsx';

export default function Index() {
    const globalClasses = globalStyles();
    return (
        <div className={clsx(globalClasses.fullScreenHeight, globalClasses.centerAll)}>
            
            <Typography variant="h4" >
                Coming soon!
            </Typography>
            {/* <Footer /> */}
        </div>
    );
}
