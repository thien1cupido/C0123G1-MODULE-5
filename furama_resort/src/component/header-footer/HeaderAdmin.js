import {Link, NavLink} from "react-router-dom";
import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export function HeaderAdmin() {
    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        ><span> {children}</span>
            <span>&#x25bc;</span>
        </a>
    ));
    const CustomMenu = React.forwardRef(
        ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
            const [value, setValue] = useState('');
            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );
    return (
        <>
            <header style={{
                height: '15vh',
                backgroundColor: 'hsl(163,40%,77%)',
                position: "fixed",
                top: '0',
                right: '0',
                left: '0',
                zIndex: "1"
            }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-2" style={{backgroundColor: 'hsl(163,40%,77%)'}}>
                        <div className="col-auto col-sm-2 col-lg-2 d-flex justify-content-center align-items-center">
                            <img
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="logo "
                                className="img-fluid" width="63" height="100"/>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item d-flex align-items-center ms-2">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            Danh sách
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as={CustomMenu}>
                                            <Dropdown.Item>
                                                <li ><NavLink className="text-decoration-none" style={{color:'black'}} to="/customer/list">Khách
                                                    hàng</NavLink></li>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <li><NavLink className="text-decoration-none" style={{color:'black'}} to="/contract/list">Hợp
                                                    đồng</NavLink></li>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}