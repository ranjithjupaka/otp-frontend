import React from 'react'
import KeyIcon from '@mui/icons-material/Key'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Button from '@mui/material/Button'
import { Box, Paper } from '@mui/material'

const VerifyOtp = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10%',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 300,
          },
        }}
      >
        <Paper elevation={3}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            paddingY={2}
          >
            <Typography variant='h5' style={{ color: '#695d76' }}>
              Verify your Account
            </Typography>
            <Typography variant='body1' style={{ color: '#cecfd3' }}>
              Enter the OTP and verify your account
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'column',
              height: '60%',
            }}
          >
            <TextField
              placeholder='Enter your Email'
              type='email'
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              style={{ width: '90%' }}
            />
            <TextField
              placeholder='Enter OTP'
              variant='outlined'
              type='number'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <KeyIcon />
                  </InputAdornment>
                ),
              }}
              style={{ width: '90%' }}
            />
            <Button variant='contained' style={{ width: '90%' }}>
              Verify Account
            </Button>
          </Box>
        </Paper>
      </Box>
    )
}

export default VerifyOtp
