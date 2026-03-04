import { ThemeProvider } from '@/context/ThemeContext';
import { AuthLayout } from '@/features/auth/components/AuthLayout';
import { SignupForm } from '@/features/auth/components/SignupForm';
import { DashboardScreen } from '@/features/dashboard/DashboardScreen';
import { ScanDetailScreen } from '@/features/scan/ScanDetailScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useTheme } from '@/context/ThemeContext';

function Screen1() {
    return (
        <AuthLayout>
            <SignupForm />
        </AuthLayout>
    );
}

export function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="sentiniq-theme">
            <AppWithTheme />
        </ThemeProvider>
    );
}

function AppWithTheme() {
    const { theme } = useTheme();
    return (
        <Router>
            <Toaster position="bottom-right" richColors theme={theme as 'light' | 'dark' | 'system'} />
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Screen1 />} />
                <Route path="/dashboard" element={<DashboardScreen />} />
                <Route path="/scan-detail" element={<ScanDetailScreen />} />
            </Routes>
        </Router>
    );
}

export default App;