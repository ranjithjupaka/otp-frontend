import React, { useState } from 'react'
import KeyIcon from '@mui/icons-material/Key'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, Paper } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PutReq from '../constants/PutReq'
import axios from 'axios'

const VerifyOtp = () => {
  const [otp, setOTP] = useState('')
  const params = useParams();
  let navigate = useNavigate()
  const handleSubmit = (e) => {
     e.preventDefault();
      PutReq.body.email = params.email
      PutReq.body.otp = otp
      console.log(PutReq)
      axios({
        method: 'put',
        url: 'https://fsz1mr3nmf.execute-api.ap-south-1.amazonaws.com/dev/otp/verify',
        data: PutReq,
      })
        .then((data) => {
          console.log(data)
          navigate('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
  }

    const handleChange = (event) => {
      setOTP(event.target.value)
    }
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
            height: 250,
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
              height: '50%',
            }}
          >
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
              onChange={handleChange}
            />
            <Button
              variant='contained'
              style={{ width: '90%' }}
              onClick={handleSubmit}
            >
              Verify Account
            </Button>
          </Box>
        </Paper>
      </Box>
    )
}

export default VerifyOtp
