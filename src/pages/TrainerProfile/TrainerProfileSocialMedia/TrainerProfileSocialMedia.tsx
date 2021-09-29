import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Card } from '../../../components/Card/Card';
import { styles } from './TrainerProfileSocialMedia.jss';

interface TrainerProfileSocialMediaProps {
  instagramUrl?: string;
  facebookUrl?: string;
  linkedInUrl?: string;
  youTubeUrl?: string;
}

export const TrainerProfileSocialMedia: React.FC<TrainerProfileSocialMediaProps> = ({
  instagramUrl,
  facebookUrl,
  linkedInUrl,
  youTubeUrl,
}) => {
  // if (!instagramUrl && !facebookUrl && !linkedInUrl && !youTubeUrl) {
  //   return null;
  // }

  return (
    <Card>
      <Box sx={styles.container}>
        <Button variant="outlined" color="primary" href={instagramUrl} startIcon={<InstagramIcon />}>
          Instagram
        </Button>
        <Button variant="outlined" color="primary" href={facebookUrl} startIcon={<FacebookIcon />}>
          Facebook
        </Button>
        <Button variant="outlined" color="primary" href={linkedInUrl} startIcon={<LinkedInIcon />}>
          LinkedIn
        </Button>
        <Button variant="outlined" color="primary" href={youTubeUrl} startIcon={<YouTubeIcon />}>
          YouTube
        </Button>
      </Box>
    </Card>
  );
};
