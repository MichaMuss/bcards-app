import { Avatar, Box, Typography } from '@mui/material';
import {DataGrid, GridActionsCellItem, styled} from  '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import useUsers from '../../users/hooks/useUsers';
import AbcIcon from '@mui/icons-material/Abc';
import LockIcon from '@mui/icons-material/Lock';
import LockClockIcon from '@mui/icons-material/LockClock';
import EditIcon from '@mui/icons-material/Edit';
import BusinessIcon from '@mui/icons-material/Business';
import ROUTES from '../../routes/routesModel';
import { useUser } from '../../users/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import {  getShortDate, getShortTime } from '../../utils/dateHelper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useAdmin from '../hooks/useAdmin';

function Users() {
    const {user} = useUser();
    const {handleUpdateBusinessStatus, handleToggleLockStatus ,handleGetUsers} = useAdmin();
    const [data, setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setError] = useState(undefined);
    const [getDate, setDate] = useState(Date.now());
    const navigate = useNavigate();

    const handleBizStatusClick = (id) => {
        
        handleUpdateBusinessStatus(id).then(() => {
            setDate(Date.now());
        });
    }

    const handleToggleLockClick = ( id) => {
        handleToggleLockStatus(id).then(() => {
            setDate(Date.now());
        });
    }

    useEffect(() => {
        setIsLoading(true);
        handleGetUsers().then((data) => {
            setError(undefined);
            setData(data);
            setIsLoading(false);
            
        }).catch(error => {
            setError(error);
            setData([]);
            setIsLoading(false);
        });
    }, [getDate]);


    const columns =  [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 30, 
            renderCell: ({row}) => <div title={row._id}><AbcIcon /></div>, 
    },
    {
        field: 'image',
        headerName: 'Avatar',
        width: 60,
        sortable: false,
        filterable: false,
        renderCell: ({row}) => <Avatar src={`${row.image.url}`} alt={row.image.alt}  />,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 200,
      renderCell: ({value}) => <div style={{textTransform:'capitalize'}}>{value}</div>,
      valueGetter: ({row}) => `${row.name.first} ${row.name.middle} ${row.name.last}`,

    },
    {
        field: 'email',
        headerName: 'Email',
        width: 150,
        flex: 1,
    },
    {
        field: 'isLocked',
        headerName: 'Locked',
        type: 'boolean',
        renderCell: ({row}) => { return (user._id!==row._id) && (row.isLocked ? 
            ( row.Logins.leftAttempts === 0 ? <LockClockIcon fontSize='small'  /> : <LockIcon fontSize='small' />) : <CloseIcon fontSize='small' />)}        
    },
    {
        field: 'isBusiness',
        headerName: 'Business',
        type: 'boolean',
        color: 'red',
    },
    {
        field: 'isAdmin',
        type: 'boolean',
        headerName: 'Admin',
    },
    {
        field: 'createdAt',
        headerName: 'Created at',
        type:'dateTime',
        width:200,
        valueGetter: ({row}) => new Date(row.createdAt),
        valueFormatter: ({value}) => getShortDate(value) + " " + getShortTime(value),
    },
    {
        field: "actions",
        type: "actions",
        getActions: (params) => [<GridActionsCellItem 
                                    label='Edit' 
                                    icon={<EditIcon />} 
                                    onClick={(e) => navigate(`${ROUTES.EDIT_USER_ADMIN}/${params.id}`)} />,
                                <GridActionsCellItem 
                                    showInMenu
                                    label='Toggle Business' icon={<BusinessIcon />} 
                                    onClick={(e) => handleBizStatusClick(params.id)} />,
                                <GridActionsCellItem 
                                    showInMenu
                                    disabled={user._id===params.row._id}
                                    label='Lock/Unlock' icon={<LockIcon />} 
                                    onClick={(e) => handleToggleLockClick(params.id)} />,
                                <GridActionsCellItem 
                                    showInMenu
                                    label='Copy ID to clipboard' icon={<ContentCopyIcon />} 
                                    onClick={(e) => navigator.clipboard.writeText(params.row._id)} />,
                                ],
        
    },];
    // dependency might be neccesary

    return ( 
        <div style={{width:'100%'}}>
            <div style={{width:'100%',}}>
                <Typography variant='h3' py={3} textAlign={'center'}>User list</Typography>
                <DataGrid  
                        rows={data} 
                        autoHeight
                        columns={columns} 
                        loading={isLoading}
                        getRowId={(row) => row._id}
                        slots={{noRowsOverlay: () => 
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',}}>
                                        {isError ? <Typography><strong>An error occured:</strong><br/>{isError}</Typography> : <Box>No users to display</Box>}
                            </div>}}
                        disableRowSelectionOnClick
                        initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 25,
                                },
                            },
                            }}
                            pageSizeOptions={[25,50,100]} />
            </div>
        </div>);
}

export default Users;