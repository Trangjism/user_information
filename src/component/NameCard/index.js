import React from 'react';
import CardStyled from '../CardStyled';
import './NameCard.css'

export default function NamceCard({value}) {
    
  return (
    <div className='name-card'>
        <CardStyled>
            <h2>User Detail Information</h2>
            <div className='user-infor'>
                <div className='avata'>
                    <img src={value?.avatar_url}/>
                </div>
                <div className='info'>
                    <p>Role: {value?.type}</p>
                    <p>Company: {value?.company == null ? 'No Data' : value?.company}</p>
                    <p>Email: {value?.email == null ? 'No Data' : value?.email}</p>
                    <p>Number of Follower: {value?.followers}</p>
                </div>
            </div>
        </CardStyled>
    </div>
  )
}

