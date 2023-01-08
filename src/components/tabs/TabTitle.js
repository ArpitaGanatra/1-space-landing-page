import React, { useCallback } from "react";

const TabTitle = (props) => {
  const { title, setSelectedTab, index, isActive } = props;
  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <li className={isActive ? "active" : null}>
      {/* <li> */}
      <button onClick={handleOnClick}>{title}</button>
    </li>
  );
};

export default TabTitle;
