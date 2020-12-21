import { makeStyles, Theme } from '@material-ui/core/styles';

export const globalStyles = makeStyles((theme: Theme) =>{
    return {
        fullScreenHeight: {
            height: "100vh"
        },
        centerAll: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            position: "absolute",
            bottom: "10px",
            width: "100%"
        },
        paddingDefault: {
            padding: theme.spacing(3)
        }
    };
});
