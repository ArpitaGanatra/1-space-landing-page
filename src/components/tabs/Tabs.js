import React, { useState } from "react";
import TabTitle from "./TabTitle";
import "./tabs.css";

const Tabs = (props) => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState(
    preSelectedTabIndex || 0
  );
  return (
    <div className="tabs">
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
