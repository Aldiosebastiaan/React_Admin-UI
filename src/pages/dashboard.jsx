import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import CardGoal from "../components/Fragments/CardGoal";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import { transactions, bills, expensesBreakdowns, balances, expensesStatistics } from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext.jsx";
import AppSnackbar from "../components/Elements/AppSnackbar.jsx";

function Dashboard() {
  const [goals, setGoals] = useState({}); // Diinisialisasi null untuk pengecekan data
  const { logout } = useContext(AuthContext);

  // State untuk AppSnackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      
      // Tampilkan pesan error via Snackbar
      setSnackbar({
        open: true,
        message: err.msg || "Gagal mengambil data goals",
        severity: "error",
      });

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            {/* Conditional rendering untuk mencegah error NaN jika data belum ada */}
              <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>

      {/* Komponen Snackbar */}
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}

export default Dashboard;