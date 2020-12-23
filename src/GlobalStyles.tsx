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
        centerAll: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            position: "absolute",
            width: "100%",
            padding: theme.spacing(3),
        },
        paddingDefault: {
            padding: theme.spacing(3)
        },
        mapContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(4)
        }
    };
});
