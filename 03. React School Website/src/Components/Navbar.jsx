const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', background: '#F5F5F5', padding: '8px 48px', boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="./images/School Logo.png" alt="School Logo" width="60px" />
                <h1>CodeSchool</h1>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '32px' }}>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#323232', fontSize: '17px' }}>Home</a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#323232', fontSize: '17px' }}>Teachers</a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: '#323232', fontSize: '17px' }}>Holidays</a>
                </li>
                <li>
                    <a href="#" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', background: '#8700FF', padding: '12px 30px', borderRadius: '4px' }}>Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar