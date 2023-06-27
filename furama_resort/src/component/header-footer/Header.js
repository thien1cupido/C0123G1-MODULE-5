export function Header() {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
                                <a href="" className="header-logo"/>
                                <img
                                    src={'/Untitled.jpg'}
                                    alt="logo"
                                    className="img-fluid"
                                    width={126}
                                    height={126}
                                />
                            </div>
                            <div className="col col-md-auto col-lg-3 d-flex">
                                <div className="catalog-widget d-none d-sm-block">
                                    <div
                                        className="catalog-widget-inside"
                                        style={{visibility: "visible"}}
                                    >
                                        <span className="catalog-widget-toggle js-catalog-widget-toggle"/>
                                    </div>
                                </div>
                                <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto"/>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon"><i className="icon-placeholder"></i></div>
                                    <div className="header-contact-txt">
                                        <p>
                                            103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn, Tp. Đà
                                            Nẵng, Việt Nam </p><p className="txt-sm">
                                        <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 d-none d-lg-block">
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon"><i className="icon-telephone"></i></div>
                                    <div className="header-contact-txt">
                                        <p className="txt-lg">
                                            84-236-3847 333/888 </p>
                                    </div>
                                </div>
                                <div className="header-contact d-flex">
                                    <div className="header-contact-icon"><i className="icon-closed-envelope"></i></div>
                                    <div className="header-contact-txt">
                                        <a href="mailto:reservation@furamavietnam.com">
                                            reservation@furamavietnam.com </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto ml-auto d-flex d-lg-none">
                                <button
                                    className="navbar-btn"
                                    data-target="#modalNavigation"
                                    data-toggle="modal"
                                >
                                    <i className="icon-menu"/>
                                </button>
                                <div
                                    className="modal fade modal-fullscreen-menu"
                                    id="modalNavigation"
                                >
                                    <button aria-label="Close" className="close" data-dismiss="modal">
                                        <i className="icon-close"/>
                                        CLOSE
                                    </button>
                                    <div className="modal-dialog"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
                <div className="sticky-wrapper" style={{position: "sticky", top: "0", zIndex: "2"}}>
                    <div className="header-nav js-header-nav sticky">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <ul
                                        id="menu-furama-vi"
                                        className="menu navbar-nav w-100 js-main-menu"
                                    >
                                        <li
                                            id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                GIỚI THIỆU
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                LOẠI PHÒNG
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5008"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                ẨM THỰC
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                HỘI NGHỊ VÀ SỰ KIỆN
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5010"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                SPA
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5011"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                GIẢI TRÍ
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5012"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                ĐIỂM ĐẾN
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5013"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="#" className="nav-link main-menu-link">
                                                ƯU ĐÃI
                                            </a>
                                        </li>
                                    </ul>
                                    {" "}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
        </>
    )
}