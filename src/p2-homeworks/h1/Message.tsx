import React from 'react'
import m from './Message.module.css'
import {MessageBlock} from './MessageBlock';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={m.message}>
            <div className={m.avatar}>
                <img src={props.avatar} alt=""/>
                <div className={m.tongue}></div>
            </div>
            <div className={m.messageBlock}>
            <MessageBlock name={props.name} message={props.message} time={props.time}/>
            </div>
        </div>
    )
}

export default Message
