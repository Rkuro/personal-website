import { Button, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { globalStyles } from '../GlobalStyles';
import clsx from 'clsx';

const localStyles = makeStyles((theme: Theme) => {
    return {
        contactContainer: {
            border: theme.palette.divider,
        },
        contactForm: {
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.shape.borderRadius,
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
            '& .MuiButtonBase-root': {
                margin: theme.spacing(1),
            },
        },
    };
});

const ContactSection: FC = (): JSX.Element => {
    const globalClasses = globalStyles();
    const localClasses = localStyles();

    return (
        <div className={clsx(globalClasses.fullScreenHeight, globalClasses.flex)}>
            <div
                className={clsx(
                    globalClasses.flex,
                    globalClasses.flexColumn,
                    globalClasses.flexGrow,
                    globalClasses.section,
                )}
            >
                <div className={clsx(globalClasses.centerAll, globalClasses.sectionHeader)}>
                    <Typography variant="h4" className={globalClasses.underlineBorder}>
                        Contact
                    </Typography>
                </div>
                <div className={clsx(globalClasses.flex, globalClasses.flexGrow, globalClasses.centerAll)}>
                    <div className={clsx(globalClasses.section, localClasses.contactContainer)}>
                        <form
                            className={clsx(globalClasses.section, localClasses.contactForm)}
                            name="contact"
                            method="POST"
                            data-netlify="true"
                        >
                            <TextField
                                id="email-input"
                                label="Email"
                                type="email"
                                autoComplete="email"
                                variant="outlined"
                                color="secondary"
                            />
                            <TextField
                                id="message-input"
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                color="secondary"
                            />
                            <Button type="submit" variant="contained" color="secondary">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
