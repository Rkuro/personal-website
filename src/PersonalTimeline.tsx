import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { makeStyles } from '@material-ui/core';

const useLocalClasses = makeStyles(() => {
    return {
        timeline: {},
    };
});

export interface PersonalTimelineProps {
    selectedTimelineItem: number;
    setSelectedTimelineItem: Dispatch<SetStateAction<number>>;
}

const PersonalTimeline: FC<PersonalTimelineProps> = (): JSX.Element => {
    const classes = useLocalClasses();

    return (
        <React.Fragment>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Born</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>School</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
        </React.Fragment>
    );
};

export default PersonalTimeline;
