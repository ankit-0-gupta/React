import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{ background: '#280044', padding: '80px 10% ', display: 'flex' }}>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: 'white', fontWeight: '500', marginBottom: '7px' }}>CodeSchool</h2>
                <p style={{ color: '#ccc' }}>Online learning school for kids powered by XYZ institute</p>
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: 'white', fontWeight: '500', marginBottom: '7px' }}>Popular Links</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <li>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li>
                        <Link to='/teachers' style={{ color: 'white', textDecoration: 'none' }}>Teachers</Link>
                    </li>
                    <li>
                        <Link to='/holidays' style={{ color: 'white', textDecoration: 'none' }}>Holidays</Link>
                    </li>
                    <li>
                        <Link to='/contact-us' style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div style={{ width: '100%' }}>
                <h2 style={{ color: 'white', fontWeight: '500', marginBottom: '7px' }}>Social Profiles</h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <li>
                        <i className="ri-youtube-fill" style={{ color: 'white', marginRight: '5px' }}></i>
                        <Link to='https://www.youtube.com' style={{ color: 'white', textDecoration: 'none' }}>Youtube</Link>
                    </li>
                    <li>
                        <i className="ri-instagram-fill" style={{ color: 'white', marginRight: '5px' }}></i>
                        <Link to='https://www.instagram.com' style={{ color: 'white', textDecoration: 'none' }}>Instagram</Link>
                    </li>
                    <li>
                        <i className="ri-twitter-fill" style={{ color: 'white', marginRight: '5px' }}></i>
                        <Link to='https://x.com' style={{ color: 'white', textDecoration: 'none' }}>Twitter</Link>
                    </li>
                    <li>
                        <i className="ri-linkedin-box-fill" style={{ color: 'white', marginRight: '5px' }}></i>
                        <Link to='https://www.linkedin.com' style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</Link>
                    </li>
                </ul>
            </div>

            <div style={{ width: '100%' }}>
                <h2 style={{ color: 'white', fontWeight: '500', marginBottom: '7px' }}>Contact Us</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <input type="text" placeholder='Fullname' name='fullname' required style={{ border: 'none', padding: '10px', borderRadius: '4px', width: '100%' }} />
                    <input type="email" placeholder='Email' name='email' required style={{ border: 'none', padding: '10px', borderRadius: '4px', width: '100%' }} />
                    <textarea type="text" placeholder='Message' name='message' required style={{ border: 'none', padding: '10px', borderRadius: '4px', width: '100%' }} rows='3'></textarea>
                    <button style={{ border: 'none', padding: '12px 24px', borderRadius: '4px', width: 'fit-content', background: '#F38E1E', color: 'white' }}>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer