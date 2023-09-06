import React from 'react';
import './AppTheme.css';
import { DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
}

// Header
function Header() {
    return <header className="header">Header</header>;
}
function Header2() {
    return <header className="header">Header</header>;
}

// Main
function Main() {
    return (
        <main className="main">
            Main
            <Profile />
            <Products />
        </main>
    );
}
// Main/Profile
function Profile() {
    return (
        <div>
            Profile
            <User />
        </div>
    );
}
// Main/Profile/User
function User() {
    return <div>User</div>;
}

// Main/Prducts
function Products() {
    return (
        <div>
            Products
            <ProductDetail />
        </div>
    );
}
// Main/Prducts/PrductDetail
function ProductDetail() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div>
            Product Detail
            <p>
                DarkMode:
                {darkMode ? <span style={{ backgroundColor: 'black', color: 'white' }}>Dark</span> : <span>Light</span>}
            </p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
}
function Contents() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <div
            style={{
                backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
            }}>
            <p>안녕하세요, 본문입니다.</p>
            <button onClick={() => toggleDarkMode()}>Theme 변경</button>
        </div>
    );
}

// Footer
function Footer() {
    return <footer>Footer</footer>;
}
