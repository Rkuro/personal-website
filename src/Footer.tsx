import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { globalStyles } from '../src/GlobalStyles';

export default function Footer(): JSX.Element {
    const classes = globalStyles();
    return (
        <div className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <MuiLink color="inherit" href="https://material-ui.com/">
                    Robin Kurosawa
                </MuiLink>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}
