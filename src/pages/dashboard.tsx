import { FC } from 'react';
import { SideBar, Header } from 'components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './home';
import Profile from './profile';
import ListePatient from './listePatient';
import Layout from "../components/layout";

const Dashboard: FC = () => {
  return (
    <div className='relative text-left font-normal w-[1440px] h-[999px] bg-[#FDFDFD] overflow-clip'>
        <div className='static left-0 top-0 w-full'>
            <Header />
        </div>
        <div className='flex flex-row'>
          
            <div className='basis-1/4'>
              <SideBar />
            </div>
            <div className='basis-3/4 w-full'>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="listepatient" element={<ListePatient />} />
                </Route>
              </Routes>
            </div>
          
          
        </div>
        
    </div>
  );
};

export default Dashboard;