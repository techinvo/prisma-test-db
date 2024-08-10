'use client';

const Header = ({ onToggleSidebar }) => {
    return (
        <div className="header">
            <h1 className="toggle-button" onClick={onToggleSidebar} >Karakage House</h1>
            <div className="flex flex-col text-xs items-end" >
                <span>Thidarat.j@aimagin.com</span>
                <span>Admin</span>
            </div>
        </div>
    );
};

export default Header;
