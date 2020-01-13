import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';

export default function ChatItem(props) {
		return(
				<ListItem
						button
						onClick={props.closeClick}
				>
						<ListItemIcon>
								<ChatIcon/>
						</ListItemIcon>
						<ListItemText primary={props.text} />
				</ListItem>
		);

}
