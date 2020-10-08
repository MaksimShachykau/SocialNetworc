import React from  'react'
import style from './footer.module.css'
const Footer = () => {
    return (
        <footer className = {style.footer}>
            <h3 className = {style.logo}>Social Network</h3>
            <h4>by Maksim Shachikov</h4>
            <h4>2020</h4>
        </footer>
    )
}

export default Footer