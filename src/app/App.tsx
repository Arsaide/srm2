import React from 'react';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import HomePage from "../pages/home/page";
import FirstLab from "../pages/1st-lab/page";
import SecondLab from "../pages/2th-lab/page";
import ThirdLab from "../pages/3th-lab/page";
import FourthLab from "../pages/4th-lab/page";
import FifthLab from "../pages/5th-lab/page";
import SixthLaba from "../pages/6th-lab/page";
import SeventhLab from "../pages/7th-lab/page";
import EighthLab from "../pages/8th-lab/page";
import GoBackBtn from "../components/layout/ui/go-back-btn/GoBackBtn";

function App() {
  return (
    <div className="App">
        <GoBackBtn/>
        <p>Група: ІА-31</p>
        <p>Студент: Мураховський Кирило Андрійович</p>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/1st-lab'} element={<FirstLab/>}/>
                <Route path={'/2st-lab'} element={<SecondLab/>}/>
                <Route path={'/3st-lab'} element={<ThirdLab/>}/>
                <Route path={'/4st-lab'} element={<FourthLab/>}/>
                <Route path={'/5st-lab'} element={<FifthLab/>}/>
                <Route path={'/6st-lab'} element={<SixthLaba/>}/>
                <Route path={'/7st-lab'} element={<SeventhLab/>}/>
                <Route path={'/8st-lab'} element={<EighthLab/>}/>
            </Routes>
    </div>
  );
}

export default App;
