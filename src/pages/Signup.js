import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostReq from '../constants/PostReq';

const Signup = () => {

  const [email, setEmail] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    PostReq.body.email = email;
    console.log(PostReq);
    axios({
      method: 'post',
      url: 'https://fsz1mr3nmf.execute-api.ap-south-1.amazonaws.com/dev/otp/generate',
      data: PostReq,
    })
      .then((data) => {
        console.log(data)
        navigate(`/verify/${email}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleChange = (event) => {
    setEmail(event.target.value);
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
              Enter your Email to Create your Account
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
              onChange={handleChange}
              required
            />
            <Button
              variant='contained'
              style={{ width: '90%' }}
              onClick={handleSubmit}
            >
              Signup
            </Button>
          </Box>
        </Paper>
      </Box>
    )
}

export default Signup   
