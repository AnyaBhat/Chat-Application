import React from 'react'

import  closeIcon from '../../icon/closeIcon.png';
import  onlineIcon from '../../icon/onlineIcon.png';

import './InfoBar.css'
const InfoBar = ({room}) => (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img src={onlineIcon} className='onlineIcon' alt="online Icon" />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href="/"><img src={closeIcon} alt="close Icon" /></a>
            </div>
        </div>
)

export default InfoBar
