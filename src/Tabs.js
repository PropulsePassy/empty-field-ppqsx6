import React, { useState } from "react";
import "./Tab.css";

const Tabs = () => {
  const [tabs, setTabs] = useState([{ id: 1, title: "Page 1" }]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newTabId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    const newTab = { id: newTabId, title: `Page ${newTabId}` };
    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
  };

  const removeTab = (id) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    if (activeTab === id && updatedTabs.length) {
      setActiveTab(updatedTabs[0].id);
    } else if (!updatedTabs.length) {
      setActiveTab(null);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${tab.id === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
            >
              x
            </button>
          </div>
        ))}
        <button onClick={addTab} className="add-tab">
          + Add Tab
        </button>
      </div>
      <div className="tab-content">
        {activeTab ? (
          <div>
            Content for {tabs.find((tab) => tab.id === activeTab)?.title}
          </div>
        ) : (
          <div>No tabs available</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
