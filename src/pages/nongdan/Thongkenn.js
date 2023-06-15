import React, { useState } from "react";
import { useSelector } from "react-redux";
import PayoutForm from "./PayoutForm";
import Chart from "../../HOC/Chart";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Thongkenn() {
  const shops = useSelector((state) => state.ShopReducer.shopnns);
  const donhangs = useSelector((state) => state.DonHangNNReducer.sanphams);
  // Số lượng shop
  const shopCount = shops.length;

  // Số lượng đơn hàng
  const orderCount = donhangs.length;

  // Số lượng đơn hàng
  const orderCount1 = donhangs.reduce(
    (count, donhang) => count + donhang.soLuong,
    0
  );

  // Doanh thu
  const revenue = donhangs.reduce(
    (total, donhang) => total + donhang.soLuong * donhang.sanPham.gia,
    0
  );

  const [selectedDate, setSelectedDate] = useState(new Date()); // Ngày được chọn

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredDonhangs = donhangs.filter((donhang) => {
    const thoiGian = moment(donhang.thoiGian);
    return (
      thoiGian.format("YYYY-MM-DD") === moment(selectedDate).format("YYYY-MM-DD")
    );
  });


  const data1 = filteredDonhangs.map((donhang) => ({
    date: moment(donhang.thoiGian).format("HH:mm DD-MM-YYYY"),
    'đơn hàng': donhang.soLuong,
    'doanh thu': donhang.soLuong * donhang.sanPham.gia,
  }));

  console.log(filteredDonhangs);
  console.log(data1);

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Doanh Thu</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-dollar-sign align-middle"
                    >
                      <line x1={12} y1={1} x2={12} y2={23} />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">{revenue.toLocaleString()} VNĐ</h1>
              <div className="mb-0">
                <span className="text-success">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> 6.65%{" "}
                </span>
                <span className="text-muted">So với tuần trước</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col mt-0">
                  <h5 className="card-title">Đơn đặt hàng</h5>
                </div>
                <div className="col-auto">
                  <div className="stat text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart align-middle"
                    >
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="mt-1 mb-3">{orderCount} Đơn</h1>
              <div className="mb-0">
                <span className="text-danger">
                  {" "}
                  <i className="mdi mdi-arrow-bottom-right" /> -2.25%{" "}
                </span>
                <span className="text-muted">So với tuần trước</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Date Picker */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-auto">
                  <label className="mb-0">Chọn ngày:</label>
                </div>
                <div className="col-auto">
                  <DatePicker
                    className="form-control"
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <Chart data={data1} />
          </div>
        </div>
      </div>
    </>
  );
}
