import React, { useState, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from '../../../components/Card/Card';
import { TrainerLocations } from '../../../interfaces/trainer';
import { styles } from './TrainerProfileServiceLocations.jss';

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
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const initialState: Location[] = cities.map(({ city, state, places }) => ({
      name: `${city} - ${state}`,
      places,
      isExpanded: places.length > 0,
    }));
    if (isProvidingOnlineService) {
      initialState.push({
        name: 'Online / Remoto',
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
                    <ListItem sx={styles.nested} disableGutters key={place}>
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
