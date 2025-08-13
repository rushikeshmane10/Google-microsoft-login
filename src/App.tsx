import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import GoogleLoginButton from "./pages/GoogleLogin";
import UserDetails from "./pages/UserPage";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<GoogleLoginButton />} />
              <Route path="/userDetails" element={<UserDetails />} />
            
          </Routes>
   
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
