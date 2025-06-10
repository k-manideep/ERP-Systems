import { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for programmatic navigation
import './Header.css';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [userName, setUserName] = useState('Guest');
    const [currentDate, setCurrentDate] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate(); // Initialize the navigate function from React Router

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState); // Toggle the dropdown state
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option); // Update selected project
        setDropdownOpen(false); // Close the dropdown after selection
    };

    useEffect(() => {
        // Fetch the logged-in user's name from localStorage or default to "Guest"
        const storedUser = localStorage.getItem('userName') || 'Guest';
        setUserName(storedUser);

        // Set current date
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    // Handle the logout function
    const handleLogout = () => {
        // Clear user data (if stored in localStorage or session)
        localStorage.removeItem('userName'); // or sessionStorage.removeItem('userName');
        setUserName('Guest'); // Reset user state to "Guest"

        // Redirect to login page
        navigate('/'); // Assuming "/login" is your login route
    };

    return (
        <>
            <header className="dashboard-header">
                <div className="top-bar">
                    <div className="menu-container">
                        <div className="menu">
                            <div className="menu-item dropdown">
                                SETUP <span className="arrow"><IoMdArrowDropdown /></span>
                                <ul className="dropdown-content">
                                    <li className="has-submenu">
                                        <span className="dropdown-text">Site</span>
                                        <span className="right-arrow">▶</span>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/change-password" className="link-style">
                                                    MRN List
                                                </Link>
                                            </li>
                                            </ul>
                                            </li>
                                            </ul>
                                            </div>
                        
                            <div className="menu-item">SETUP</div>
                            <div className="menu-item">PLANNING</div>
                            <div className="menu-item">ENGINEERING</div>

                            <div className="menu-item dropdown">
                                PURCHASE <span className="arrow"><IoMdArrowDropdown /></span>
                                <ul className="dropdown-content">
                                    <li className="has-submenu">
                                        <span className="dropdown-text">Site</span>
                                        <span className="right-arrow">▶</span>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/mrn-list" className="link-style">
                                                    MRN List
                                                </Link>
                                            </li>
                                            <li>MRN</li>
                                            <li>
                                                <Link to="/quality-approval" className="link-style">
                                                    Quality Approval
                                                </Link>
                                            </li>
                                            <ul>
                                                <li className="has-submenu">
                                                    Opening
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link to="/opening-quantity" className="link-style">
                                                                Add
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/opening-add" className="link-style">
                                                                Edit
                                                            </Link>
                                                        </li>
                                                
                                                    </ul>
                                                </li>
                                            </ul>

                                            <li>
                                                <Link to="/stock-variation" className="link-style">
                                                    Stock Variation
                                                </Link>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="has-submenu">
                                        <span className="dropdown-text">Store</span>
                                        <span className="right-arrow">▶</span>
                                        <ul className="submenu">
                                            <li>Issue</li>
                                            <li>
                                                <Link to="/issue-material" className="link-style">
                                                    Issue
                                                </Link>
                                            </li>
                                            <li>Contractor Out</li>
                                            <li>Manual Material Transfer</li>
                                            <li>Issue Return</li>
                                            <li>Receive Transfer Material</li>
                                            <li>Return Rejected Material</li>
                                            <li>Set Surplus Item</li>
                                            <li>Freeze Quantity Issue</li>
                                            <li>Contractor Debit Note</li>
                                            <li>Report</li>
                                            <li>Vendor Material Return</li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <span className="dropdown-text">Store Reports</span>
                                        <span className="right-arrow">▶</span>
                                        <ul className="submenu">
                                            <li>Stock In Hand </li>
                                            <li>Stack Valuation In Hand</li>
                                            <li>Construction &Stock Issue</li>
                                            <li>Stock Transfer Register</li>
                                            <li>Stock Transit Register</li>
                                            <li>Item Group Wise Stock</li>
                                            <li>Stock Aging Report </li>
                                            <li>Company Stock</li>
                                            <li>Company Item Wise Stock</li>
                                            <li>Meterial Stock Wages</li>
                                            <li>Rejected Stock </li>
                                            <li>Item Process Stock </li>
                                            <li>project Material Qty </li>
                                            <li>Location Wise Issue</li>
                                            <li>Contractor</li>
                                            <li>Report  Builder</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="user-info">
                        <span>{userName}</span>
                        <span>{currentDate}</span>

                        {/* Home Button */}
                        <Link to="/dashboard">
                            <FaHome className="icon-main" />
                        </Link>

                        {/* Logout Button */}
                        <div onClick={handleLogout} className="icon-main">
                            <IoExitOutline />
                        </div>

                        {/* Select Project Dropdown */}
                        <div className="search-dropdown" onClick={toggleDropdown}>
                            <input
                                type="text"
                                placeholder="Select a Project"
                                value={selectedOption}
                                readOnly
                            />
                            <span className="icon">
                                <MdArrowDropDownCircle />
                            </span>
                        </div>

                        {/* Fullscreen dropdown, will be shown only if dropdownOpen is true */}
                        {dropdownOpen && (
                            <div className="dropdown-list">
                                <ul >
                                    <li onClick={() => handleSelectOption('Select Our Project')}>
                                        --Select Our Project--
                                    </li>
                                    <li onClick={() => handleSelectOption('Suvih')}>Suvih</li>
                                    <li onClick={() => handleSelectOption('Suvih-2')}>Suvih-2</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
