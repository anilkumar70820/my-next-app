"use client"
import { LOCAL_TAB_DATA } from '@/utils/helper';
import { useEffect, useState } from 'react';
import Sidebar from '../common/Sidebar';

function LocalStorageTabs() {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const getTab = localStorage.getItem('activetab');
    if (getTab) {
      setActiveTab(getTab);
    } else {
      setActiveTab('London'); // Set default active tab
      localStorage.setItem('activetab', 'London');
    }
  }, []);

  function openCity(cityName) {
    setActiveTab(cityName);
    localStorage.setItem('activetab', cityName);
  }

  return (
    <div>
        <Sidebar/>
    <div className='max-w-[1140px] mx-auto px-3'>
      <div className="tab mb-5 flex justify-center gap-4 pt-5">
        {LOCAL_TAB_DATA.map((obj,i)=>{
            return(
        <button key={i}
          className={`tablinks px-8 py-4 rounded-xl border border-transparent border-solid hover:border-blue-700 bg-blue-700 hover:bg-white transition-all duration-500 text-white hover:text-black font-semibold text-xl font-mono ${activeTab === obj.tab ? '!bg-white !border-blue-700 !text-black' : ''}`}
          onClick={() => openCity(obj.tab)}
        >
          {obj.tab}
        </button>
            )
        })}
      </div>

      {/* Tab contents */}
      <div>
        {LOCAL_TAB_DATA.map((obj,i)=>{
return(
        <div id={obj.tab} key={i} className={`tabcontent max-w-[400px] p-10 shadow-xl rounded-xl border border-solid border-blue-700 mx-auto ${activeTab === obj.tab ? '' : 'hidden'}`}>
          <h3 className="text-4xl font-bold font-mono">{obj.contentHeading}</h3>
          <p className="text-2xl font-medium font-mono">{obj.contentPara}</p>
        </div>
)
        })}
      </div>
    </div>
    </div>
  );
}

export default LocalStorageTabs;
