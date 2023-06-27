import {Link, NavLink} from "react-router-dom";

export function HeaderAdmin() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg "
                data-bs-theme="light"
                style={{
                    backgroundColor: "#046056",
                    height: 75,
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    width: "100%"
                }}
            >
                <div className="sticky-wrapper" style={{marginLeft: "15%"}}>
                    <div className="header-nav js-header-nav sticky">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <ul
                                        id="menu-furama-vi"
                                        className="menu navbar-nav w-100 js-main-menu j"
                                    >
                                        <li
                                            id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <NavLink to="" className="nav-link main-menu-link">
                                                TRANG CHỦ
                                            </NavLink>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <NavLink to="" className="nav-link main-menu-link">
                                                KHÁCH HÀNG
                                            </NavLink>
                                        </li>
                                        <li
                                            id="nav-menu-item-5008"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <NavLink to="" className="nav-link main-menu-link">
                                                NHÂN VIÊN
                                            </NavLink>
                                        </li>
                                        <li
                                            id="nav-menu-item-50010"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <NavLink to=""
                                                     className="nav-link main-menu-link ">
                                                DỊCH VỤ
                                            </NavLink>
                                        </li>
                                        <li
                                            id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <NavLink to=""
                                                     className="nav-link main-menu-link">
                                                HỢP ĐỒNG THUÊ
                                            </NavLink>
                                        </li>
                                        <li
                                            id="nav-menu-item-5013"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <div className="dropdown">
                                                <a className="dropbtn nav-link main-menu-link">THÊM MỚI</a>
                                                <div className="dropdown-content">
                                                    <Link to="">Thêm mới khách hàng</Link>
                                                    <a href="">Thêm mới nhân viên</a>
                                                    <Link to="/createRentalContract">Thêm mới hợp đồng thuê</Link>
                                                    <Link to="/createService">Thêm mới dịch vụ</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <form className="d-flex " style={{marginLeft: 300}}>
                                        <input
                                            className="form-control mr-2"
                                            type="search"
                                            placeholder="Tìm kiếm"
                                            style={{width: 220, marginLeft: "5%"}}
                                            aria-label="Search"
                                        />
                                        <button
                                            className="btn btn-info"
                                            type="submit"
                                            style={{fontSize: "1.2em"}}
                                        >
                                            <i className="fa-solid fa-magnifying-glass"/>
                                        </button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}