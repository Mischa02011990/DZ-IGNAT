import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
            <div className={s.content}></div>
            <div className={s.angle}></div>
            <div className={s.text}></div>
            <div className={s.name}></div>
            <div className={s.time}></div>
        </div>
    )
}

export default Message
