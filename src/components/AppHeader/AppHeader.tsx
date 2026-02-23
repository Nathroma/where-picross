import { SelectablePage } from "@/App";
import style from "./AppHeader.module.scss";

type AppHeaderProps = {
    returnToMainMenu: () => unknown
    selectPage: (page: SelectablePage) => unknown
    isMainMenu: boolean
}

function AppHeader({returnToMainMenu, selectPage, isMainMenu}: AppHeaderProps) {

    return (
        <div className={style.header}>
            <div className={style.titleLogo}>
                <h1>Where Picross</h1>
                <img src="/where-picross-logo.png" alt="where-picross-logo" />
            </div>
            <div className={style.otherPage}>
                {
                    isMainMenu ? (
                        <div>
                            <button onClick={() => selectPage(SelectablePage.creatorPage)}>Creator</button>
                            <button onClick={() => selectPage(SelectablePage.canvasPage)}>Canvas</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => returnToMainMenu()}>Home</button>
                        </div>
                    )
                }
            </div>
            <div className={style.divider}/>
        </div>
    )
}

export default AppHeader