import { Box, Paper } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Button from '@mui/material/Button'

const Signup = () => {
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
            height: 450,
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
              Welcome !
            </Typography>
            <Typography variant='body1' style={{ color: '#cecfd3' }}>
              Enter your Details to Create your Account
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'column',
              height: '70%',
            }}
          >
            <TextField
              placeholder='Enter your Name'
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              style={{ width: '90%' }}
            />
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
              placeholder='Enter Password'
              type='password'
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              style={{ width: '90%' }}
            />
            <TextField
              placeholder='Confirm Password'
              type='password'
              variant='outlined'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              style={{ width: '90%' }}
            />
            <Button variant='contained' style={{ width: '90%' }}>
              Signup
            </Button>
          </Box>
        </Paper>
      </Box>
    )
}

export default Signup   