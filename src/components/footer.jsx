import React from "react";

function Footer() {

    var d = new Date();
    var year = d.getFullYear();

    return (
        <footer> copyright {year} </footer>
    );
}

export default Footer;