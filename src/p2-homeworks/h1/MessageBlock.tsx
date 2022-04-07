import React from 'react';
import st from './MessageBlock.module.css'

type MessageBlockType = {
    name: string,
    message: string,
    time: string,
}

export const MessageBlock = (props:MessageBlockType) =>{
    return(
        <div className={st.messageBlock}>
            <div className={st.name}>
                {props.name}
            </div>
            <div className={st.text}>
                {props.message}
            </div>
            <div className={st.time}>
                {props.time}
            </div>
        </div>
    )

}