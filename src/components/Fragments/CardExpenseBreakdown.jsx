import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpenseBreakdown(props) {
  const { data, isComparisonPage } = props;

  const renderIcon = (category) => {
    switch (category?.toLowerCase()) {
      case "housing": return <Icon.House />;
      case "food": return <Icon.Food />;
      case "transportation": return <Icon.Transport />;
      case "entertainment": return <Icon.Movie />;
      case "shopping": return <Icon.Shopping />;
      default: return <Icon.Other />;
    }
  };

  const chartData = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {data?.map((item, index) => (
        <div key={index} className="flex flex-col w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          {/* Header Kartu */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gray-100 p-3 rounded-lg text-gray-500">
                {renderIcon(item.category)}
              </div>
              <div className="ms-4">
                <p className="text-gray-400 text-sm font-medium capitalize">{item.category}</p>
                <span className="text-xl font-bold text-black">${item.amount}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-xs font-bold">
                <span className="me-1">{item.percentage}%</span>
                {/* PAKSA WARNA MENGGUNAKAN STYLE JIKA PROP COLOR GAGAL */}
                {item.trend === "up" ? (
                  <Icon.ArrowUp size={12} style={{ color: "#299D91", fill: "#299D91" }} />
                ) : (
                  <Icon.ArrowDown size={12} style={{ color: "#E73D1C", fill: "#E73D1C" }} />
                )}
              </div>
              <p className="text-[10px] text-gray-400 leading-tight">Compare to the last month</p>
            </div>
          </div>
          
          {/* List Detail Item */}
          <div className="space-y-4 mt-2">
            {item.detail?.map((sub, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm border-t border-gray-50 pt-3">
                <div>
                  <p className="font-bold text-gray-800">{sub.item}</p>
                  <p className="text-xs text-gray-400">{sub.date}</p>
                </div>
                <span className="font-bold text-gray-700">${sub.amount}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card
      title={isComparisonPage ? "" : "Expenses Breakdown"}
      desc={
        !data || data.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-48 text-primary">
            <CircularProgress color="inherit" size={50} />
            <span className="mt-2 text-gray-500">Loading Data</span>
          </div>
        ) : (
          chartData
        )
      }
    />
  );
}

export default CardExpenseBreakdown;