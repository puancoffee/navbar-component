<nav
className="navbar navbar-expand-lg navbar-light bg-light sticky-top stroke">
<div className='container'>
    <Link className="navbar-brand" to="/">
        <img
            src={Logo}
            alt='logo'
            style={{
            width: 60
        }}/>
    </Link>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/article">Article</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/hire">Hire me</Link>
            </li>
        </ul>
    </div>
</div>
</nav>