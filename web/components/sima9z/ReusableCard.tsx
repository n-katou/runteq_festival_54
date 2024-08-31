import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Image from 'next/image';

import { ReusableCardProps } from '../../types/types_sima9z';

const ReusableCard: React.FC<ReusableCardProps> = ({ imageSrc, imageAlt, title, description, link, bgcolor, onClick }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        textAlign: 'center',
        bgcolor: bgcolor || '#E8A9A5',
        borderRadius: '15px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        style={{ borderRadius: '15px' }}
      />
      <Button         
        href={link !== '#' ? link : undefined} 
        onClick={link === '#' ? onClick : undefined} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Typography variant="h5" sx={{ marginTop: 2, color: '#ff3e60', fontFamily: 'Pacifico, cursive' }}>
          {title}
        </Typography>
      </Button>
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default ReusableCard;