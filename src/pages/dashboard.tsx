import { FC } from 'react';
import { SideBar, Header } from 'components';


const Dashboard: FC = () => {
  return (
    <div className='relative text-left font-normal w-[1440px] h-[999px] bg-[#FDFDFD] overflow-clip'>
        <div className='static left-0 top-0 w-full'>
            <Header />
        </div>
        <div className='flex'>
            <SideBar />
        </div>
        
    </div>
  );
};

export default Dashboard;