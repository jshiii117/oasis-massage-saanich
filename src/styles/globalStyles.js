import { Typography } from '@mui/material';
import styled from 'styled-components';
import theme from './theme';

const OptimaTypography = styled(Typography)({
    //className="optima" can be added if CSS specificity is causing font to not load
    '&.optima': {
        fontFamily: theme.typography.fontFamily.optimaLight,
        lineHeight: 1,
        margin: 0
    },
    fontFamily: theme.typography.fontFamily.optimaLight,
    lineHeight: 1,
    margin: 0,

})

export { OptimaTypography }
