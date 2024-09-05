import React, { memo } from 'react';
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
        marginBottom: '50px',
        width: '100%',
        '@media (min-width: 900px)': {
          justifyContent: 'flex-end',
          paddingRight: '50px', 
          marginBottom: '50px',
        },
      }}
    >
      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={handleGoHome}
        sx={{
          padding: '10px 20px',
          backgroundColor: '#FFC4D4',
          fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif',
          fontSize: '18px',
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

export default memo(GoHomeButton);
