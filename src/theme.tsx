import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#194248",
            main: "#0D2A30",
            dark: "#081B22",
        },
        secondary: {
            light: "#16565F",
            main: "#26BBB9",
            dark: "#16565F",
        },
        background: {
            default: "#081B22",
        },
        error: {
            light: "#AB5559",
            main: "#962A30",
            dark: "#782226",
        },
    },
    typography: {
        fontSize: 12,
    },
});

export default theme;
