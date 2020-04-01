const Layout = ({children})=>{
    return(
        <React.Fragment>
            <p>hearder</p>
            {children}
            <p>footer</p>
        </React.Fragment>
    )
};

export default Layout;