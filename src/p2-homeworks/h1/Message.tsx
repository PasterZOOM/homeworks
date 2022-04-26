import React from 'react'
import st from './Message.module.css'
import {MessageBlock} from './MessageBlock';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={st.message}>
            <div className={st.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={st.messageBlock}>
                <MessageBlock name={props.name}
                              message={props.message}
                              time={props.time}/>
            </div>
        </div>
    )
}

export default Message
