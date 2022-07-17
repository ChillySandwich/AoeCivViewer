import { Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonCard = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={300} height={120} />
            <Skeleton variant="text"  width={300}/>
            <Skeleton variant="text"  width={300}/>
            <Skeleton variant="text"  width={300}/>
        </>
    )
}
 