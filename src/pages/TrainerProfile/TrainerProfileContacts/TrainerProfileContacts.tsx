import React from 'react';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Card } from '../../../components/Card/Card';
import { TrainerContacts } from '../../../interfaces/trainer';
import { useStyles } from './TrainerProfileContacts.jss';

interface TrainerProfileContactsProps {
  contacts: TrainerContacts;
}

export const TrainerProfileContacts: React.FC<TrainerProfileContactsProps> = ({
  contacts: { email, phone },
}) => {
  const classes = useStyles();
  return (
    <Card title="Contatos">
      <div className={classes.container}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          href={`mailto:${email}`}
          startIcon={<EmailIcon />}
        >
          E-mail
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableElevation
          href={`https://wa.me/55${phone}`}
          startIcon={<WhatsAppIcon />}
        >
          WhatsApp
        </Button>
      </div>
    </Card>
  );
};
