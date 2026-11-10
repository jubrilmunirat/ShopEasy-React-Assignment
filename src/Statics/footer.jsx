const Footer = () => {
    return (
        <footer style={{
            backgroundColor: "green",
            color: "white",
            padding: "20px",
            textAlign: "center",
            marginTop: "40px",
            borderTop: "1px solid #333"
        }}>
            <p style={{ margin: "0 0 5px 0", fontSize: "20px", fontWeight: "bold" }}>Munny's Bag Collection</p>
            <p style={{ margin: "0", fontSize: "15px", color: "white" }}>
                &copy; {new Date().getFullYear()} All rights reserved. Crafted for luxury enthusiasts.
            </p>
        </footer>
    );
}
export default Footer;