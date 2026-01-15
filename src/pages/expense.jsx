import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown"; 
import CircularProgress from "@mui/material/CircularProgress";
import { expenseService } from "../services/dataService";

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsLoading(true);
      try {
        const data = await expenseService(); 
        // API mengembalikan array langsung
        setExpenses(data || []); 
      } catch (err) {
        console.error(err);
        setExpenses([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-400">Expenses Comparison</h1>
      </div>

      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} />
          <p className="mt-2 text-gray-400">Loading Data</p>
        </div>
      ) : (
        /* Grid 3 kolom sesuai desain */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenses.length > 0 ? (
            expenses.map((exp, index) => (
              /* Mengirim satu objek pengeluaran dalam array agar kompatibel dengan CardExpenseBreakdown */
              <CardExpenseBreakdown key={index} data={[exp]} isComparisonPage={true} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400">
              No data available
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
}

export default ExpensesPage;