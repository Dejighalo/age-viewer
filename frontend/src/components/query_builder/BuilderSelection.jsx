import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import React from 'react';
import uuid from 'react-uuid';
import KeyWordFinder from '../../features/query_builder/KeyWordFinder';

const BuilderSelection = ({ finder, setQuery, currentWord }) => {
  const handleClick = (e) => {
    const selectedVal = e.target.getAttribute('data-val');
    setQuery(selectedVal);
  };
  return (
    <ListGroup>
      {
        finder?.getConnectedNames(currentWord).map(
          (element) => (
            <Button
              size="small"
              onClick={handleClick}
              data-val={element}
              key={uuid()}
            >
              {element}
            </Button>
          ),
        )
      }
    </ListGroup>
  );
};

BuilderSelection.propTypes = {
  finder: PropTypes.shape(KeyWordFinder).isRequired,
  setQuery: PropTypes.func.isRequired,
  currentWord: PropTypes.string.isRequired,
};
export default BuilderSelection;
