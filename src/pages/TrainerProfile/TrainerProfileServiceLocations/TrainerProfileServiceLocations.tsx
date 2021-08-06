import React, { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card } from '../../../components/Card/Card';
import { TrainerLocations } from '../../../interfaces/trainer';
import { useStyles } from './TrainerProfileServiceLocations.jss';

interface Location {
  name: string;
  places: string[];
  isExpanded: boolean;
}

interface TrainerProfileServiceLocationsProps {
  locations: TrainerLocations;
}

export const TrainerProfileServiceLocations: React.FC<TrainerProfileServiceLocationsProps> = ({
  locations: { cities, isProvidingInHomeService, isProvidingOnlineService },
}) => {
  const classes = useStyles();
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const initialState: Location[] = cities.map(({ city, state, places }) => ({
      name: `${city} - ${state}`,
      places,
      isExpanded: places.length > 0,
    }));
    if (isProvidingOnlineService) {
      initialState.push({
        name: 'Remoto / Online',
        places: [],
        isExpanded: false,
      });
    }
    if (isProvidingInHomeService) {
      initialState.push({
        name: 'Domicílio',
        places: [],
        isExpanded: false,
      });
    }
    setLocations(initialState);
  }, [cities, isProvidingInHomeService, isProvidingOnlineService]);

  const handleToggleExpanded = (locationName: string): void => {
    setLocations((state) =>
      state.map((location) => {
        if (location.name === locationName) {
          return {
            ...location,
            isExpanded: !location.isExpanded,
          };
        }
        return location;
      })
    );
  };

  return (
    <Card title="Locais de atendimento">
      <List disablePadding>
        {locations.map(({ name, places, isExpanded }) => (
          <React.Fragment key={name}>
            <ListItem button disableGutters onClick={() => handleToggleExpanded(name)}>
              <ListItemText primary={name} primaryTypographyProps={{ variant: 'body2' }} />
              {places.length > 0 && (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>
            {places.length > 0 && (
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {places.map((place) => (
                    <ListItem className={classes.nested} disableGutters key={place}>
                      <ListItemText primary={place} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};
