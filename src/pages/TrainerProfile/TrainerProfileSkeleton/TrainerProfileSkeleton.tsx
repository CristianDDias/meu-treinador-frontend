import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Card } from '../../../components/Card/Card';
import { useStyles } from './TrainerProfileSkeleton.jss';

export const TrainerProfileSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Card>
        <div className={classes.container} style={{ alignItems: 'center' }}>
          <Skeleton variant="rect" width={200} height={200} />
          <Skeleton variant="rect" width={215} height="1.5rem" />
          <Skeleton variant="rect" width={225} height="1.125rem" />
        </div>
      </Card>
      <Card>
        <div className={classes.container}>
          <Skeleton variant="rect" width={215} height="1.5rem" />
          <Skeleton variant="rect" width="100%" height={36} />
          <Skeleton variant="rect" width="100%" height={36} />
        </div>
      </Card>
      <Card>
        <div className={classes.container}>
          <Skeleton variant="rect" width={215} height="1.5rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
        </div>
      </Card>
      <Card>
        <div className={classes.container}>
          <Skeleton variant="rect" width={215} height="1.5rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
          <Skeleton variant="rect" width="100%" height="0.875rem" />
        </div>
      </Card>
    </>
  );
};
