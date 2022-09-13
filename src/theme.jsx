import { createTheme } from '@mui/material/styles';
import { red, blue, indigo, green, purple } from '@mui/material/colors';

const theme = createTheme({
    spacing: 4,
    palette: {
    primary: {
        main: indigo[500],
    },
    secondary: {
        main: red[500],
    },
    },
});

export default theme;