import React from 'react';
import { Grid } from '@mui/material';
import '../App.css';
import { HelveticaType, OptimaType } from '../styles/globalStyles';


function AboutSection() {
    return (
        <Grid container direction="column" display="flex" width="100%" maxWidth={1000} alignSelf="center" sx={{ mb: 4, backgroundColor: "" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <OptimaType className="optima" variant="h6" style={{ fontSize: 30, textAlign: "center" }}>
                    Meet your Therapist
                </OptimaType>
                <div style={{ height: 20 }} />
                <HelveticaType variant="h8" style={{ fontSize: 18, textAlign: "center", lineHeight: 1.8 }}>
                    I am a graduate of the West Coast College of Massage Therapy (WCCMT) in Victoria BC and a Registered
                    Massage Therapist.  I work and communicate with clients to provide exceptional care by implementing
                    individualized treatment  plans to accomplish their healthcare goals. I specialize in many techniques
                    including trigger point  modalities, Swedish massage, Myofascial release therapy, neuromuscular
                    therapy, active and passive  stretching and deep tissue work. My goal is to help my clients manage
                    stress, chronic pain and mental  health challenges as well as improve their general wellbeing
                </HelveticaType>
            </Grid>
        </Grid>
    )
}

export default AboutSection;
