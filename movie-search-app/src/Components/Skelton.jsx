import React from 'react';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

function Skelton() {
    const skeletonCount = 8;

    const skeletonArray = new Array(skeletonCount).fill(null);
    return (
        <Grid container spacing={2}>
            {skeletonArray.map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <Skeleton variant="rectangular" height={200} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Skelton