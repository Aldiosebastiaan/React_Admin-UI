import React, { useEffect, useState, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import CardGoal from "../components/Fragments/CardGoal";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";

import { transactions, bills, balances, expensesStatistics } from "../data";
import { goalService, expenseService } from "../services/dataService"; 
import { AuthContext } from "../context/authContext.jsx";
import AppSnackbar from "../components/Elements/AppSnackbar.jsx";

function Dashboard() {
  const [goals, setGoals] = useState({});
  const [breakdownData, setBreakdownData] = useState([]);
  const { logout } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data || {}); 
    } catch (err) {
      if (err.status === 401) logout();
    }
  };

  const fetchExpensesBreakdowns = async () => {
    try {
      const data = await expenseService();
      setBreakdownData(data || []);
    } catch (err) {
      setBreakdownData([]);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchExpensesBreakdowns();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          {/* BARIS ATAS: Balance, Goals, Upcoming Bill */}
          <div className="sm:col-span-4"><CardBalance data={balances} /></div>
          <div className="sm:col-span-4"><CardGoal data={goals} /></div>
          <div className="sm:col-span-4"><CardUpcomingBill data={bills} /></div>

          {/* BARIS BAWAH: Dibagi menjadi dua kolom besar */}
          
          {/* SISI KIRI: Recent Transactions (Memanjang ke bawah) */}
          <div className="sm:col-span-4">
            <CardRecentTransaction data={transactions} />
          </div>

          {/* SISI KANAN: Statistics di atas, Expenses Breakdown di bawah */}
          <div className="sm:col-span-8 flex flex-col gap-6">
            <CardStatistic data={expensesStatistics} />
            <CardExpenseBreakdown data={breakdownData} />
          </div>
        </div>
      </MainLayout>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
}

export default Dashboard;