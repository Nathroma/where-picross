import "@/components/AppHeader/AppHeader.scss";

function AppHeader() {

    return (
        <div className='header'>
            <div className='title-logo'>
                <h1>Where Picross</h1>
                <img src="/where-picross-logo.png" alt="where-picross-logo" />
            </div>
            <div className='divider'/>
        </div>
    )
}

export default AppHeader