import { makeStyles } from '@material-ui/core/styles';

export const globalStyles = makeStyles({
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
        bottom: "10px"
    }
});
