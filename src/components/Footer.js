const styleObj = {
    backgroundColor: "#272829",
    textAlign: "center",
    color: "white",
    height: "100px",
    fontSize: "36px",
    margin: "0",
    padding:"30px 0"
}

// Writing inline styles in jsx or we can give the whole object in the style itself.
const Footer = () => {
    return(
        <h4 style={styleObj}>Footer</h4>
    )
}

export default Footer;