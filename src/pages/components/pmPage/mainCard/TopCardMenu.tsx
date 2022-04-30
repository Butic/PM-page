import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

const TopCardMenu = ({setShowMenu} : {setShowMenu: any}) =>{
  return (
    <Box sx={{ minWidth: 120, position: 'absolute', backgroundColor: 'white', right: 0, opacity: '0.95', fontWeight: 'bolded', borderRadius: '0 0 15px 15px'}}>
      <FormControl fullWidth>
        <MenuItem sx={{ borderBottom: '1px solid lightgrey' }} value={10}>Write Feedback</MenuItem>
        <MenuItem sx={{ borderBottom: '1px solid lightgrey' }} value={10}>Add Pesonal Task</MenuItem>
        <MenuItem sx={{ borderBottom: '1px solid lightgrey' }} value={10}>Refresh</MenuItem>
        <MenuItem sx={{ display:'flex', justifyContent: 'center',height: '20px' }} value={10} onClick={()=>{setShowMenu(false);}}> <KeyboardControlKeyIcon/> </MenuItem>
      </FormControl>
    </Box>
  );
};

export default TopCardMenu;
