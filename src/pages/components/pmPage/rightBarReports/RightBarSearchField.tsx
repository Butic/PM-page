import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { reportFilterEnums } from '../../../../interfaces/reportFilterEnums';

const RightBarSearchField = ({targetedFilter, setTargetedFilter, searchData, setSearchData}:{targetedFilter:reportFilterEnums, setTargetedFilter:any, searchData:string, setSearchData: any}) =>{

  const [visible, setVisible] = React.useState(false);

  const onSearchDataChange = (e: any) =>{
    setSearchData(e.target.value);
  };
  
  const changeFilterStatus = (e: any)=>{
    console.log(e.target.innerText);
    targetedFilter!==e.target.innerText?setTargetedFilter(e.target.innerText):setTargetedFilter(reportFilterEnums.EMPTY);
  };

  const menuItemStyle = { borderBottom: '1px solid lightgrey' };
  const targetedMenuItemStyle = {...menuItemStyle, color: 'black', backgroundColor: '#feffff'};

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignSelf: 'center', width: '90%', marginTop: '0.5vh' }}
      onSubmit = {(e: { preventDefault: () => void; })=>{e.preventDefault();}}
    >
      <IconButton sx={{ p: '10px', position: 'relative' }} aria-label="menu" onClick={()=>{setVisible(!visible);}}>
        <SortIcon sx={{color: targetedFilter?'deepskyblue':'gray'}}/>
        {visible&&
        <Box sx={{ minWidth: 120, position: 'absolute', backgroundColor: 'white', left: 0, top:'4vh', zIndex:'100', fontWeight: 'bolded', borderLeft: '1px solid lightgrey', borderTop: '1px solid lightgrey', boxShadow: '5px 5px 5px black'}}>
          <FormControl fullWidth>
            <MenuItem sx={targetedFilter==='Name'?targetedMenuItemStyle:menuItemStyle} value={'Name'} onClick={changeFilterStatus}>Name</MenuItem>
            <MenuItem sx={targetedFilter==='Date'?targetedMenuItemStyle:menuItemStyle} value={'Date'} onClick={changeFilterStatus}>Date</MenuItem>
            <MenuItem sx={targetedFilter==='Status'?targetedMenuItemStyle:menuItemStyle} value={'Status'} onClick={changeFilterStatus}>Status</MenuItem>
          </FormControl>
        </Box>}
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={targetedFilter?`Filtered by: ${targetedFilter}`:'Search report'}
        inputProps={{ 'aria-label': 'search report' }}
        value={searchData}
        onChange={onSearchDataChange}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default RightBarSearchField;
