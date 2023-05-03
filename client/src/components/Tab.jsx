import { Explore, Dashboard, History, Watchlist } from "./Tabs";
import { useEffect, useRef, useState } from "react";
import { create } from "zustand";

const tabsData = [
  {
    label: "Explore",
    content: <Explore />,
  },
  {
    label: "Dashboard",
    content: <Dashboard />,
  },
  {
    label: "History",
    content: <History />,
  },
  {
    label: "Watchlist",
    content: <Watchlist />,
  },
];

const useTabStore = create((set) => ({
  activeTabIndex: 0,
  setActiveTabIndex: (index) => set({ activeTabIndex: index }),
}));

function Tab() {
  const activeTabIndex = useTabStore((state) => state.activeTabIndex);
  const setActiveTabIndex = useTabStore((state) => state.setActiveTabIndex);

  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="border border-b-2-gray-200 mb-5"></div>
      <div className="relative lg:mx-44 mx-6">
        <div className="flex space-x-5">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`pt-2 pb-2 ${
                  activeTabIndex === idx
                    ? "text-black border-b-2 font-medium border-black"
                    : "text-slate-700"
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4 border border-gray-200 lg:mx-44 mx-6 mt-8 rounded-md p-4">
        {tabsData[activeTabIndex].content}
      </div>
    </div>
  );
}

export default Tab;
