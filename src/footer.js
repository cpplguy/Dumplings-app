import React, {useEffect} from 'react';
export default function Footer(){
    const [time, setTime] = React.useState(new Date().toLocaleString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(timer);
    })
    return (
        <footer>
            <p>{new Date().getFullYear()}<br/>{time} <br/> <a href = "mailto:ramonguo136@gmail.com"> &copy; Ramon Guo</a> All Rights Reserved</p>
        </footer>
    )
}
