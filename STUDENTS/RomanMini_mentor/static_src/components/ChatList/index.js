import React, { useState } from 'react'

import List from '@material-ui/core/List';

import ChatItem from '../ChatItem'

export default function ChatList (props) {
		const  [ chats, setChats ] = useState(['Games', 'Trips', 'Business', 'Drafts']);

		return (
				<List>
						{chats.map((text, index) => (
								<ChatItem
										key={index}
										text={text}
										closeClick={props.closeClick}
								>
								</ChatItem>
						))}
				</List>
		);
}