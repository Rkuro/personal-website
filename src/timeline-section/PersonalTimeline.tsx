import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { TimelineDataItem } from '.';

export interface PersonalTimelineProps {
    selectedTimelineIndex: number;
    setSelectedTimelineIndex: Dispatch<SetStateAction<number>>;
    timelineData: Array<TimelineDataItem>;
}

const PersonalTimeline: FC<PersonalTimelineProps> = (props: PersonalTimelineProps): JSX.Element => {
    return (
        <React.Fragment>
            <Timeline>
                {props.timelineData.map((timelineDataItem: TimelineDataItem, index: number) => {
                    return <PersonalTimelineItem key={index} selectedItem={timelineDataItem} {...props} />;
                })}
            </Timeline>
        </React.Fragment>
    );
};

interface PersonalTimelineItemProps extends PersonalTimelineProps {
    selectedItem: TimelineDataItem;
}

const PersonalTimelineItem: FC<PersonalTimelineItemProps> = (props: PersonalTimelineItemProps): JSX.Element => {
    return (
        <div>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{props.selectedItem.title}</TimelineContent>
                <TimelineContent>{props.selectedItem.date.toLocaleDateString()}</TimelineContent>
            </TimelineItem>
        </div>
    );
};

export default PersonalTimeline;
