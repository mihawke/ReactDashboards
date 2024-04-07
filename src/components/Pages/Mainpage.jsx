import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const navigate = useNavigate(); 
    return (
        <>
            <div>MainPage</div>
            <button onClick={()=> navigate('/home')}>Go Home</button>
            <button onClick={()=> navigate('/frontpage1')}>FrontPage1</button>
        </>
    )
}

export default MainPage