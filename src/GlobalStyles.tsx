import { makeStyles, Theme } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme: Theme) => {
    return {
        fullScreenHeight: {
            minHeight: '100vh',
        },
        flex: {
            display: 'flex',
        },
        flexColumn: {
            display: 'flex',
            flexDirection: 'column',
        },
        flexGrow: {
            flex: 1,
        },
        centerAll: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        lightBackground: {
            background: theme.palette.primary.light,
        },
        footer: {
            position: 'absolute',
            width: '100%',
            padding: theme.spacing(3),
        },
        paddingDefault: {
            padding: theme.spacing(3),
        },
        section: {
            padding: `${theme.spacing(3)}px`,
        },
        sectionHeader: {
            width: '100%',
            textAlign: 'center',
            padding: `${theme.spacing(5)}px 0`,
        },
        sectionContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        underlineBorder: {
            borderBottom: '3px solid white',
        },
    };
});
