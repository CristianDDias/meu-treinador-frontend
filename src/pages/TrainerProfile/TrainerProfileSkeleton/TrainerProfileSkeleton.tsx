import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Card } from '../../../components/Card/Card';
import { styles } from './TrainerProfileSkeleton.jss';

export const TrainerProfileSkeleton: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Card>
        <Box sx={styles.content} style={{ alignItems: 'center' }}>
          <Skeleton variant="rectangular" width={200} height={200} />
          <Skeleton variant="rectangular" width={215} height="1.5rem" />
          <Skeleton variant="rectangular" width={225} height="1.125rem" />
        </Box>
      </Card>
      <Card>
        <Box sx={styles.content}>
          <Skeleton variant="rectangular" width={215} height="1.5rem" />
          <Skeleton variant="rectangular" width="100%" height={36} />
          <Skeleton variant="rectangular" width="100%" height={36} />
        </Box>
      </Card>
      <Card>
        <Box sx={styles.content}>
          <Skeleton variant="rectangular" width={215} height="1.5rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
        </Box>
      </Card>
      <Card>
        <Box sx={styles.content}>
          <Skeleton variant="rectangular" width={215} height="1.5rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
        </Box>
      </Card>
    </Box>
  );
};
