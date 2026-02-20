import style from "./AppHeader.module.scss";

function AppHeader() {

    return (
        <div className={style.header}>
            <div className={style.titleLogo}>
                <h1>Where Picross</h1>
                <img src="/where-picross-logo.png" alt="where-picross-logo" />
            </div>
            <div className={style.divider}/>
        </div>
    )
}

export default AppHeader