import React from 'react';
import { useRouter } from 'next/router';
import { Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const GoHomeButton: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
        '@media (min-width: 900px)': {
          justifyContent: 'flex-end',
          paddingRight: '20px',
        },
      }}
    >
      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={handleGoHome}
        sx={{
          backgroundColor: '#FFC4D4',
          fontFamily: 'Comic Sans MS, Comic Sans, cursive',
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#FF99AA',
          },
        }}
      >
        Home
      </Button>
    </Box>
  );
};

export default GoHomeButton;
