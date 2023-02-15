import { createTheme } from '@mui/system';
import '../index.css';

const theme = createTheme({
    typography: {
        fontFamily: {
            optimaLight: 'OptimaLight',
            helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        },
    }
})

export default theme;