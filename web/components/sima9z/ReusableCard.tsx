import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { ReusableCardProps } from '../../types/types_sima9z';

const ReusableCard: React.FC<ReusableCardProps> = ({ imageSrc, imageAlt, title, description, link, bgcolor, onClick }) => {
  return (
    <Box
      component={link === '#' ? 'div' : Link}
      href={link !== '#' ? link : undefined}
      target={link !== '#' ? '_blank' : undefined}
      rel={link !== '#' ? 'noopener noreferrer' : undefined}
      onClick={link === '#' ? onClick : undefined}
      sx={{
        textDecoration: 'none',
        cursor: 'pointer',
        height: '100%', // 高さを全てのボックスで統一
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          textAlign: 'center',
          bgcolor: bgcolor || '#E8A9A5',
          borderRadius: '15px',
          height: '100%', // 高さを全てのペーパーで統一
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#F2A3A2',
          },
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          style={{ borderRadius: '15px' }}
        />
        <Typography variant="h5" sx={{ marginTop: 2, color: '#ff3e60', fontFamily: 'Comic Sans MS, Arial Rounded MT Bold, sans-serif' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ReusableCard;