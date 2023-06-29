import 'bootstrap/dist/css/bootstrap.css'

export function Footer() {
    return (
            <footer className="text-center text-lg-start bg-light text-muted ">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left */}
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"/>
                    </a>
                </div>
                {/* Right */}
            </section>
            {/* Section: Social media */}
            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"/>
                                Furama resort
                            </h6>
                            <p>
                                Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những điểm đến hấp dẫn
                                nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn là bốn Di sản Văn hóa Thế giới được
                                UNESCO công nhận
                            </p>
                        </div>
                        {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">*/}
                        {/*    /!* Links *!/*/}
                        {/*    <h6 className="text-uppercase fw-bold mb-4">Products</h6>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Angular*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            React*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Vue*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Laravel*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*/!* Grid column *!/*/}
                        {/*/!* Grid column *!/*/}
                        {/*<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">*/}
                        {/*    /!* Links *!/*/}
                        {/*    <h6 className="text-uppercase fw-bold mb-4">Giá công bố</h6>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Pricing*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Settings*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Orders*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href="#!" className="text-reset">*/}
                        {/*            Help*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                            <p>
                                <i className="fas fa-home me-3"/>103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3"/>
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3"/> * Tel.: 84-236-3847 333/888
                            </p>
                            <p>
                                <i className="fas fa-print me-3"/> * Fax: 84-236-3847 666
                            </p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links  */}
            {/* Copyright */}
            <div
                className="text-center p-4"
                style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
            >
                © 2023 Copyright:
                <a className="text-reset fw-bold">
                    furamavietnam   .com
                </a>
            </div>
        </footer>
    )
}