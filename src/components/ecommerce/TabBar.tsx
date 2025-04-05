import React from "react";

interface TabItem {
  id: string;
  label: string;
  active: boolean;
}

interface TabBarProps {
  tabs: TabItem[];
  onTabChange?: (tabId: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, onTabChange }) => {
  return (
    <div className="flex w-full overflow-x-auto bg-white h-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`text-sm leading-[18px] h-10 bg-white px-6 py-2 ${
            tab.active
              ? "text-[#323232] border-2 border-[#B57D40]"
              : "text-[#6F6F6F]"
          }`}
          onClick={() => onTabChange && onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
