import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -90
        });
        props.onClose(false);
    };

    const navItemsArr = [
        {
            text: "Event starts in",
            name: '1'
        },
        {
            text: "Venue NFO",
            name: '2'
        },
        {
            text: "Highlights",
            name: '3'
        },
        {
            text: "Pricing",
            name: '4'
        },
        {
            text: "Location",
            name: '5'
        }
    ];

    const navItemsView = navItemsArr.map((item, index) =>
        <ListItem button onClick={()=> scrollToElement(item.name)} key={index}>
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