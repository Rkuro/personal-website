import { makeStyles, Theme } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme: Theme) =>{
    return {
        fullScreenHeight: {
            height: "100vh"
        },
        flex: {
            display: "flex"
        },
        flexColumn: {
            display: "flex",
            flexDirection: "column"
        },
        flexGrow: {
            flex: 1
        },
        centerAll: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        lightBackground: {
            background: theme.palette.primary.light
        },
        footer: {
            position: "absolute",
            width: "100%",
            padding: theme.spacing(3),
        },
        paddingDefault: {
            padding: theme.spacing(3)
        },
        underlineBorder: {
            borderBottom: "3px solid white"
        }
    };
});
