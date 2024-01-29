const Footer = () => {

    const today = new Date()

    return(

        <footer>
            <p>Copy &copy; {today.getFullYear()}</p>
        </footer>

    )

}

export default Footer;