import React from 'react';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Card } from '../../../components/Card/Card';
import { useStyles } from './TrainerProfileContacts.jss';

interface TrainerProfileContactsProps {
  email: string;
  whatsapp: string;
}

/*

#TODO:
- Add a standard message for each contact.
  - Whatsapp: https://wa.me/XXXXXXXXXXX?text=Olá%20Fulano!

*/

export const TrainerProfileContacts: React.FC<TrainerProfileContactsProps> = ({
  email,
  whatsapp,
}) => {
  const classes = useStyles();
  return (
    <Card title="Solicite um orçamento">
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
          href={`https://wa.me/55${whatsapp}`}
          startIcon={<WhatsAppIcon />}
        >
          WhatsApp
        </Button>
      </div>
    </Card>
  );
};
