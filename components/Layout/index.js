import Top from './Top'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = Content => {
    return () => (
        <div style={{ position : 'relative', minHeight : '100vh' }}>
            <Top />
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout

