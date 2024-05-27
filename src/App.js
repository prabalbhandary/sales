import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from 'react-query';
import DarkModeToggle from "./components/DarkModeToggle";
import theme from "./theme";
import LoginPage from "./components/Auth/LoginPage";
import ActiveOrders from "./components/Orders/ActiveOrders";
import CompletedOrders from "./components/Orders/CompletedOrders";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <AuthProvider>
            <DarkModeToggle />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/orders" element={<ActiveOrders />} />
              <Route path="/completed-orders" element={<CompletedOrders />} />
            </Routes>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
