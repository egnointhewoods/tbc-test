import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';



function LoadingScreen() {
  return (
    <div className='loadingButton container-lg'>
        <CircularProgress />
    </div>
  )
}

export default LoadingScreen