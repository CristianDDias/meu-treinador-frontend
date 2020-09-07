import React, { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card } from '../../../components/Card/Card';
import { TrainerServiceLocation } from '../../../interfaces/trainer';
import { useStyles } from './TrainerProfileServiceLocations.jss';

type ExpandedItems = Record<string, boolean>;

interface TrainerProfileServiceLocationsProps {
  locations: TrainerServiceLocation[];
  allowRemote: boolean;
}

export const TrainerProfileServiceLocations: React.FC<TrainerProfileServiceLocationsProps> = ({
  locations,
  allowRemote,
}) => {
  const classes = useStyles();
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

  useEffect(() => {
    const initialState: ExpandedItems = {};
    locations.forEach((location) => {
      if (location.places) {
        initialState[location.id] = false;
      }
    });
    setExpandedItems(initialState);
  }, [locations]);

  const handleToggleExpandedItem = (id: string): void => {
    if (id in expandedItems) {
      setExpandedItems((state) => ({ ...state, [id]: !state[id] }));
    }
  };

  const displayLocations = locations.map((location) => ({
    id: location.id,
    name: `${location.city} - ${location.state}`,
    places: location.places,
  }));
  if (allowRemote) {
    displayLocations.push({
      id: 'Remoto / Online',
      name: 'Remoto / Online',
      places: undefined,
    });
  }

  return (
    <Card title="Locais de atendimento">
      <List disablePadding>
        {displayLocations.map((location) => (
          <React.Fragment key={location.id}>
            <ListItem button disableGutters onClick={() => handleToggleExpandedItem(location.id)}>
              <ListItemText primary={location.name} primaryTypographyProps={{ variant: 'body2' }} />
              {location.places !== undefined &&
                (expandedItems[location.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>
            {location.places !== undefined && (
              <Collapse in={expandedItems[location.id]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {location.places.map((place) => (
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
