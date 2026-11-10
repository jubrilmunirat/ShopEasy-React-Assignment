const Header = () => {
    return (
        <header style={{
            backgroundColor: "green",
            color: "white",
            padding: "20px",
            textAlign: "center",
            borderBottom: "3px solid #d4af37"
        }}>
            <h1 style={{ margin: "0", fontSize: "28px", letterSpacing: "2px" }}>Munny's Bag Collection</h1>
            <p style={{ margin: "8px 0 0 0", fontSize: "12px", color: "#bbb", textAlign: "center" }}>
                Discover timeless elegance and exclusive luxury handbags
            </p>
        </header>
    );
}
export default Header;