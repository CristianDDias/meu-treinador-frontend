import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Rating from '@material-ui/lab/Rating';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { formatRatingValue } from '../../utils/formatters';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
import { Trainer } from '../../interfaces/trainer';
// #MOCK-END

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  card: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: '100%',
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
  favoriteButton: {
    background: '#ffffff',
    position: 'absolute',
    right: 0,
    transform: 'translateX(50%)',
    padding: theme.spacing(1),
    zIndex: theme.zIndex.appBar,
  },
  contactButton: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
  },
  rating: {
    marginRight: theme.spacing(1),
  },
  specialities: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      color: theme.palette.primary.main,
      background: `${theme.palette.primary.main}26`,
    },
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));

// --------------------------------------------------

// TODO: Isolate in a component

interface TrainerProfileCardProps {
  alignItemsCenter?: boolean;
  title?: string;
}

const TrainerProfileCard: React.FC<TrainerProfileCardProps> = ({
  alignItemsCenter,
  title,
  children,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.card}
      display="flex"
      flexDirection="column"
      alignItems={alignItemsCenter ? 'center' : undefined}
    >
      {title && <Typography className={classes.title}>{title}</Typography>}
      {children}
    </Box>
  );
};

// --------------------------------------------------

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  // #MOCK-START
  const trainer = trainers.find(({ id }) => id === trainerId) as Trainer;
  const trainerEmail = 'name@email.com';
  const trainerWhatsApp = '5551987654321';
  const isFavorite = trainer.rating.value > 4;
  const cities = {
    [`Sapiranga - RS`]: ['Bio Forma', 'Corpus', 'Pro Fit', 'A combinar'],
    [`Novo Hamburgo - RS`]: ['Arena', 'I9', 'Line'],
    [`Remoto`]: undefined,
  };
  // #MOCK-END

  const [openedCities, setOpenedCities] = React.useState(() => {
    const initialOpenedCities: Record<string, boolean> = {};
    Object.keys(cities).forEach((city) => {
      initialOpenedCities[city] = false;
    });
    return initialOpenedCities;
  });

  const handleClickCity = (city: string): void => {
    setOpenedCities((state) => ({ ...state, [city]: !state[city] }));
  };

  return (
    <div className={classes.container}>
      <TrainerProfileCard alignItemsCenter>
        <Box position="relative">
          <IconButton className={classes.favoriteButton} color="primary">
            {isFavorite ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar className={classes.avatar} variant="rounded" src={trainer.img} />
        </Box>
        <Box display="flex">
          <IconButton
            className={classes.contactButton}
            color="primary"
            href={`https://wa.me/${trainerWhatsApp}`}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.contactButton}
            color="primary"
            href={`mailto:${trainerEmail}`}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography className={classes.name}>{trainer.name}</Typography>
        <Box display="flex">
          <Rating
            className={classes.rating}
            value={trainer.rating.value}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2">
            {formatRatingValue(trainer.rating.value)} ({trainer.rating.reviews} avaliações)
          </Typography>
        </Box>
      </TrainerProfileCard>

      <TrainerProfileCard title="Sobre mim">
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </TrainerProfileCard>

      <TrainerProfileCard title="Qualificações">
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </TrainerProfileCard>

      <TrainerProfileCard title="Especialidades">
        {/* 

        yellow
          background-color: rgb(255, 244, 229);
          color: #ff9800;

        red
          background-color: #fdecea;
          color: #f44336;

        blue
          background-color: rgb(232, 244, 253);
          color: #2196f3;

        green
          background-color: rgb(237, 247, 237);
          color: #4caf50;

        */}

        <div className={classes.specialities}>
          <Chip label="Body Building" />
          <Chip label="Body Composition" />
          <Chip label="Body Sculpting" />
          <Chip label="Body Transformation" />
          <Chip label="Boxing" />
          <Chip label="Calisthenics" />
          <Chip label="Core Strength" />
          <Chip label="Cross Training" />
          <Chip label="Cycling" />
          <Chip label="Functional Training" />
          <Chip label="Gymnastics" />
          <Chip label="HIIT" />
          <Chip label="Metafit" />
          <Chip label="Muscular Hypertrophy" />
          <Chip label="Olympic Lifting" />
          <Chip label="Performance" />
          <Chip label="Pilates" />
          <Chip label="Pre-Post Natal" />
          <Chip label="Rehabilitation" />
          <Chip label="Running" />
          <Chip label="Seniors Specific" />
          <Chip label="Sports Specific" />
          <Chip label="Strength and Conditioning" />
          <Chip label="Weight Loss" />
          <Chip label="Wellness" />
          <Chip label="Yoga" />
        </div>
      </TrainerProfileCard>

      <TrainerProfileCard title="Locais de atendimento">
        {/* 
        Cidades > Locais (academias ou "qualquer lugar (a combinar)")
        Remoto 
        */}

        <List disablePadding>
          {Object.entries(cities).map(([city, places]) => (
            <React.Fragment key={city}>
              <ListItem button onClick={() => handleClickCity(city)}>
                <ListItemText primary={city} />
                {places !== undefined &&
                  (openedCities[city] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItem>
              {places !== undefined && (
                <Collapse in={openedCities[city]} timeout="auto" unmountOnExit>
                  <List disablePadding dense>
                    {places.map((place) => (
                      <ListItem className={classes.nested} key={place}>
                        <ListItemText primary={place} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>

        {/* 
        <List disablePadding>
          <ListItem button onClick={() => handleClickCity('Sapiranga')}>
            <ListItemText primary="Sapiranga" />
            <ExpandLessIcon />
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List disablePadding dense>
              <ListItem className={classes.nested}>
                <ListItemText primary="ProFit" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Bio Forma" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Corpus" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="A combinar" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClickCity('Novo Hamburgo')}>
            <ListItemText primary="Novo Hamburgo" />
            <ExpandLessIcon />
          </ListItem>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <List disablePadding dense>
              <ListItem className={classes.nested}>
                <ListItemText primary="Arena" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="I9" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="Line" />
              </ListItem>
              <ListItem className={classes.nested}>
                <ListItemText primary="A combinar" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        */}
      </TrainerProfileCard>

      <TrainerProfileCard title="Horários de atendimento">
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Segunda</TableCell>
                <TableCell align="right">
                  <Chip label="08:00 - 20:00" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Terça</TableCell>
                <TableCell align="right">
                  <Chip label="08:00 - 20:00" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quarta</TableCell>
                <TableCell align="right">
                  <Chip label="08:00 - 20:00" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quinta</TableCell>
                <TableCell align="right">
                  <Chip label="08:00 - 20:00" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sexta</TableCell>
                <TableCell align="right">
                  <Chip label="08:00 - 20:00" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sábado</TableCell>
                <TableCell align="right">
                  <Chip label="A combinar" size="small" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Domingo</TableCell>
                <TableCell align="right">
                  <Chip label="A combinar" size="small" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TrainerProfileCard>

      <TrainerProfileCard title="Avaliações">
        <Typography variant="body2" align="justify">
          Tudo certo!
        </Typography>
      </TrainerProfileCard>
    </div>
  );
};
