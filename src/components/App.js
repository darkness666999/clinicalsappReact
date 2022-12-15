import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import CollectClinicals from './pages/CollectClinicals';
import AddPatient from './pages/AddPatient';
import AnalyzeData from './pages/AnalyzeData';
import ChartGenerator from './pages/ChartGenerator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './themes/GlobalStyle';
import { LightTheme } from './themes/LightTheme'
import { DarkTheme } from './themes/DarkTheme';

library.add(fas);

function App() {
    const[theme, setTheme] = useState(LightTheme);
    return (
        <ThemeProvider theme={{...theme, setTheme: ()=>{
            setTheme(s=> s.id === 'light' ?  DarkTheme : LightTheme)
        }}}>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/addPatient" element={<AddPatient />}></Route>
                    <Route
                        path="/analyze/:patientId"
                        element={<AnalyzeData />}
                    ></Route>
                    <Route
                        path="chart/:componentName/:patientId"
                        element={<ChartGenerator />}
                    ></Route>
                    <Route
                        path="/patientDetails/:patientId"
                        element={<CollectClinicals />}
                    ></Route>
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
