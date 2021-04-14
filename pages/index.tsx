import React, { ReactElement, useState } from 'react';
import { globalStyles } from '../src/GlobalStyles';
import clsx from 'clsx';
import { Button, Divider, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Footer from '../src/Footer';
import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CircleImg from '../src/CircleImg';
import Map from '../src/Map';
import PersonalTimeline from '../src/PersonalTimeline';

const localStyles = makeStyles((theme: Theme) => {
    return {
        personalPic: {
            maxWidth: '35vw',
        },
        section: {
            padding: `${theme.spacing(3)}px`,
        },
        sectionHeader: {
            width: '100%',
            textAlign: 'center',
            paddingBottom: `${theme.spacing(5)}px`,
        },
        sectionContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
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

export default function Index(): ReactElement {
    const globalClasses = globalStyles();
    const localClasses = localStyles();
    const [selectedTimelineItem, setSelectedTimelineItem] = useState(0);

    const fadeIn = {
        opacity: [0, 1],
    };

    const animate = {
        opacity: [0, 1],
        y: [-100, 0],
    };

    const buttonAnimate = {
        x: [0, 0, -5, 0, 20, 0, 0],
    };
    const buttonTransition = {
        loop: Infinity,
        ease: 'easeIn',
        duration: 1.5,
    };

    console.log('render');

    return (
        <React.Fragment>
            {/* Intro */}
            <div className={clsx(globalClasses.fullScreenHeight, globalClasses.centerAll)}>
                <Grid container>
                    <Grid item xs={12} sm={6} className={clsx(globalClasses.centerAll, globalClasses.paddingDefault)}>
                        <div>
                            <motion.div
                                className={globalClasses.centerAll}
                                animate={animate}
                                transition={{ ease: 'easeInOut', delay: 0.2 }}
                            >
                                <Typography variant="h1">Hi.</Typography>
                            </motion.div>
                            <motion.div animate={animate} transition={{ ease: 'easeInOut', delay: 2 }}>
                                <Typography variant="h1"> I&apos;m Robin.</Typography>
                            </motion.div>
                            <motion.div
                                className={globalClasses.centerAll}
                                animate={animate}
                                transition={{ ease: 'easeInOut', delay: 3 }}
                            >
                                <Typography variant="h6"> Check out my stuff</Typography>
                                <motion.div animate={buttonAnimate} transition={buttonTransition}>
                                    <IconButton aria-label="go-to-stuff">
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </motion.div>
                            </motion.div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={clsx(globalClasses.paddingDefault, globalClasses.centerAll)}>
                        <motion.div
                            animate={fadeIn}
                            transition={{ ease: 'easeIn' }}
                            className={clsx(localClasses.personalPic, globalClasses.flexGrow)}
                        >
                            <CircleImg src="/blue-hills.jpg" />
                        </motion.div>
                    </Grid>
                </Grid>
            </div>

            <Divider orientation="horizontal" />

            {/* Map & Timeline */}
            <div className={clsx(globalClasses.fullScreenHeight, globalClasses.lightBackground, globalClasses.flex)}>
                <div
                    className={clsx(
                        globalClasses.flex,
                        globalClasses.flexColumn,
                        globalClasses.flexGrow,
                        localClasses.section,
                    )}
                >
                    <div className={clsx(globalClasses.centerAll, localClasses.sectionHeader)}>
                        <Typography variant="h4" className={globalClasses.underlineBorder}>
                            Timeline
                        </Typography>
                    </div>
                    <Grid container className={globalClasses.flexGrow}>
                        <Grid item xs={12} sm={7} className={globalClasses.flexColumn}>
                            <div className={clsx(localClasses.sectionContainer, globalClasses.flex)}>
                                <Map />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            <div className={localClasses.sectionContainer}>
                                <PersonalTimeline
                                    selectedTimelineItem={selectedTimelineItem}
                                    setSelectedTimelineItem={setSelectedTimelineItem}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* Contact */}
            <div className={clsx(globalClasses.fullScreenHeight, globalClasses.flex)}>
                <div
                    className={clsx(
                        globalClasses.flex,
                        globalClasses.flexColumn,
                        globalClasses.flexGrow,
                        localClasses.section,
                    )}
                >
                    <div className={clsx(globalClasses.centerAll, localClasses.sectionHeader)}>
                        <Typography variant="h4" className={globalClasses.underlineBorder}>
                            Contact
                        </Typography>
                    </div>
                    <div className={clsx(globalClasses.flex, globalClasses.flexGrow, globalClasses.centerAll)}>
                        <div className={clsx(localClasses.section, localClasses.contactContainer)}>
                            <form
                                className={clsx(localClasses.section, localClasses.contactForm)}
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

            <Footer />
        </React.Fragment>
    );
}
