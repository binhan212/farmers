import React from "react";

export default function HomeAdmin() {
    return (
        <>
            <h1 class="h3 mb-3">
                <strong>Thống Kê</strong>
            </h1>

            <div>
                <div className="row">
                    <div className="col-xl-12 col-xxl-12 d-flex">
                        <div className="w-100">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">
                                                        Bán Hàng
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i
                                                            className="align-middle"
                                                            data-feather="truck"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">2.382</h1>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">
                                                        Khách Hàng
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i
                                                            className="align-middle"
                                                            data-feather="users"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">
                                                14.212
                                            </h1>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">
                                                        Thu Nhập
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i
                                                            className="align-middle"
                                                            data-feather="dollar-sign"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">
                                                $21.300
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col mt-0">
                                                    <h5 className="card-title">
                                                        Đơn Hàng
                                                    </h5>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="stat text-primary">
                                                        <i
                                                            className="align-middle"
                                                            data-feather="shopping-cart"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h1 className="mt-1 mb-3">64</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
