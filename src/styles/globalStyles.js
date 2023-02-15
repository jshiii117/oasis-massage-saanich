import { Typography } from '@mui/material';
import styled from 'styled-components';
import theme from './theme';

const OptimaType = styled(Typography)({
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

const HelveticaType = styled(Typography)({
    //className="optima" can be added if CSS specificity is causing font to not load
    '&.helvetica': {
        fontFamily: theme.typography.fontFamily.helvetica,
        lineHeight: 1,
        margin: 0
    },
    fontFamily: theme.typography.fontFamily.helvetica,
    lineHeight: 1,
    margin: 0,

})

export { OptimaType, HelveticaType }
