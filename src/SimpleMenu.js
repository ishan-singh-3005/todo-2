import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [visibleHigh, setVisibleHigh] = React.useState(false);
  const [visibleMed, setVisibleMed] = React.useState(false);
  const [visibleLow, setVisibleLow] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHigh = () => {
    setAnchorEl(null);
    setVisibleHigh(true);
    setVisibleMed(false);
    setVisibleLow(false);
  };

  const handleMed = () => {
    setAnchorEl(null);
    setVisibleMed(true);
    setVisibleLow(false);
    setVisibleHigh(false);
  };

  const handleLow = () => {
    setAnchorEl(null);
    setVisibleLow(true);
    setVisibleHigh(false);
    setVisibleMed(false);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <PriorityHighIcon data-tut="tag"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleHigh}>High</MenuItem>
        <MenuItem onClick={handleMed}>Medium</MenuItem>
        <MenuItem onClick={handleLow}>Low</MenuItem>
      </Menu>
    {visibleHigh ? <button className="btn btn-sm btn-danger">High</button> : null}
    {visibleMed ? <button className="btn btn-sm btn-warning">Medium</button> : null}
    {visibleLow ? <button className="btn btn-sm btn-success">Low</button> : null}
    </div>
  );
}