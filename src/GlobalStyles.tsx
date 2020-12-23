import { makeStyles, Theme } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme: Theme) =>{
    return {
        fullScreenHeight: {
            height: "100vh"
        },
        flex: {
            display: "flex"
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
            display: "flex",
            flex: 1,
            height: "60vh",
            alignItems: "center",
            justifyContent: "center",
            padding: "6vh"
        }
    };
});
