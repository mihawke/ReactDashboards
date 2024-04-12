import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Frontpage2.module.css";
import Home from './Home';


const FrontPage2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Home></Home>
        </div>
    )
}

export default FrontPage2