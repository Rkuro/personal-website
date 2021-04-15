import React, { FC, useState } from 'react';
import { globalStyles } from '../../src/GlobalStyles';
import clsx from 'clsx';
import { Typography, Grid } from '@material-ui/core';
import Map from './Map';
import PersonalTimeline from './PersonalTimeline';

// const timeline_data = {
//     items: [
//         {
//             date: new Date(1388552400000), // 2014/01/01
//             title: 'Accepted at Boston University',
//             location: {
//                 lat: '42.352930',
//                 long: '-71.120520',
//             },
//         },
//     ],
// };

const TimelineSection: FC = (): JSX.Element => {
    const globalClasses = globalStyles();

    const [selectedTimelineItem, setSelectedTimelineItem] = useState(0);

    return (
        <div className={clsx(globalClasses.fullScreenHeight, globalClasses.lightBackground, globalClasses.flex)}>
            <div className={clsx(globalClasses.flex, globalClasses.flexColumn, globalClasses.flexGrow)}>
                <Grid container className={globalClasses.flexGrow}>
                    <Grid item xs={12} sm={7} className={globalClasses.flexColumn}>
                        <div className={clsx(globalClasses.sectionContainer, globalClasses.flex)}>
                            <Map />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <div className={globalClasses.sectionContainer}>
                            <div className={clsx(globalClasses.centerAll, globalClasses.sectionHeader)}>
                                <Typography variant="h4" className={globalClasses.underlineBorder}>
                                    Timeline
                                </Typography>
                            </div>
                            <PersonalTimeline
                                selectedTimelineItem={selectedTimelineItem}
                                setSelectedTimelineItem={setSelectedTimelineItem}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default TimelineSection;
