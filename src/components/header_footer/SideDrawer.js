import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    const navItemsArr = [
        {
            text: "Event starts in"
        },
        {
            text: "Venue NFO"
        },
        {
            text: "Highlights"
        },
        {
            text: "Pricing"
        },
        {
            text: "Location"
        }
    ];

    const navItemsView = navItemsArr.map((item, index) =>
        <ListItem button onClick={()=> console.log(item.text)} key={index}>
            {item.text}
        </ListItem>
    );

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List
                component="nav"
            >
                {navItemsView}
            </List>
        </Drawer>
    );
};

export default SideDrawer;