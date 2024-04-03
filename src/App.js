import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeDashboard from './componantDashboard/HomeDashboard';
import SuperVisors from './componantDashboard/SuperVisors';
import AddSuperVisor from './componantDashboard/AddSuperVisor';
import UpdateSupervisors from './componantDashboard/UpdateSupervisors';
import MartyrsDash from './componantDashboard/MartyrsDash';
import DisplayMartysDash from './componantDashboard/DisplayMartysDash';
import DetaineesDash from './componantDashboard/DetaineesDash';
import DisplayDestainessDash from './componantDashboard/DisplayDestainessDash';
import MissingDash from './componantDashboard/MissingDash';
import DisplayMissingDash from './componantDashboard/DisplayMissingDash';
import WarCriminals from './componantDashboard/WarCriminals';
import DisplayWarCriminals from './componantDashboard/DisplayWarCriminals';
import TraitorsDash from './componantDashboard/TraitorsDash';
import DisplayTraitorsDash from './componantDashboard/DisplayTraitorsDash';
import HonorCard from './componantDashboard/HonorCard';
import DisplayHonorCard from './componantDashboard/DisplayHonorCard';
import LastNewsDash from './componantDashboard/LastNewsDash';
import RevolutionArchiveDash from './componantDashboard/RevolutionArchiveDash';
import SymbolsoftheRevolution from './componantDashboard/SymbolsoftheRevolution';
import BlackListDash from './componantDashboard/BlackListDash';
import CrimesSystem from './componantDashboard/CrimesSystem';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* هتبداي الراوتر من هنا يا دميانة */}
        <Route path="dashboard" element={<HomeDashboard />}>
          <Route path="supervisor" element={<SuperVisors />} />
          <Route path="addsupervisor" element={<AddSuperVisor />} />
          <Route path="updatesupervisor" element={<UpdateSupervisors />} />
          <Route path="martyrs" element={<MartyrsDash />} />
          <Route path="displaymartyrs" element={<DisplayMartysDash />} />
          <Route path="detaineesdash" element={<DetaineesDash />} />
          <Route path="displaydetainess" element={<DisplayDestainessDash />} />
          <Route path="missingdash" element={<MissingDash />} />
          <Route path="displaymissing" element={<DisplayMissingDash />} />
          <Route path="warcriminals" element={<WarCriminals />} />
          <Route path="displaywarcriminals" element={<DisplayWarCriminals />} />
          <Route path="traitors" element={<TraitorsDash />} />
          <Route path="displaytraitor" element={<DisplayTraitorsDash />} />
          <Route path="honorcard" element={<HonorCard />} />
          <Route path="displayhonorcard" element={<DisplayHonorCard />} />
          <Route path="lastnewsdash" element={<LastNewsDash />} />
          <Route
            path="revolutionarchivedash"
            element={<RevolutionArchiveDash />}
          />
          <Route
            path="symbolsoftherevolution"
            element={<SymbolsoftheRevolution />}
          />
          <Route path="blacklist" element={<BlackListDash />} />
          <Route path="crimessystem" element={ <CrimesSystem/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
