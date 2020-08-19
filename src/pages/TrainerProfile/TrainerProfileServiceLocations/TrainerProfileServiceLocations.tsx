import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TrainerProfileCard } from '../TrainerProfileCard/TrainerProfileCard';
import { TrainerServiceLocation } from '../../../interfaces/trainer';

const useStyles = makeStyles((theme: Theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

type ExpandedCities = Record<string, boolean>;

interface TrainerProfileServiceLocationsProps {
  locations: TrainerServiceLocation[];
  allowRemote: boolean;
}

export const TrainerProfileServiceLocations: React.FC<TrainerProfileServiceLocationsProps> = ({
  locations,
  allowRemote,
}) => {
  const classes = useStyles();
  const [expandedCities, setExpandedCities] = useState<ExpandedCities>({});

  useEffect(() => {
    const initialState: ExpandedCities = {};
    locations.forEach((location) => {
      initialState[location.id] = false;
    });
    setExpandedCities(initialState);
  }, [locations]);

  const handleToggleExpandedCity = (id: string): void => {
    setExpandedCities((state) => ({ ...state, [id]: !state[id] }));
  };

  return (
    <TrainerProfileCard title="Locais de atendimento">
      <List disablePadding>
        {locations.map((location) => (
          <React.Fragment key={location.id}>
            <ListItem button disableGutters onClick={() => handleToggleExpandedCity(location.id)}>
              <ListItemText primary={`${location.city} - ${location.state}`} />
              {location.places !== undefined &&
                (expandedCities[location.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>

            {location.places !== undefined && (
              <Collapse in={expandedCities[location.id]} timeout="auto" unmountOnExit>
                <List disablePadding dense>
                  {location.places.map((place) => (
                    <ListItem className={classes.nested} disableGutters key={place}>
                      <ListItemText primary={place} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}

        {allowRemote && (
          <ListItem button disableGutters>
            <ListItemText primary="Remoto / Online" />
          </ListItem>
        )}
      </List>
    </TrainerProfileCard>
  );
};
