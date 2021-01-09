import React, { useState } from 'react';
import styled from 'styled-components';

const TabsWrapper = styled.div`
  justify-content: left;
  h3 {
    color: ${(props) => props.theme.colorPalette.red};
  }
  h3:hover {
    color: ${(props) => props.theme.colorPalette.primaryButtonHover};
    cursor: pointer;
  }
  &.active {
    text-decoration: underline;
  }
`;

const TabList = styled.div`
  display: flex;
  margin-bottom: 1em;
  & div:not(:last-child) {
    margin-right: 2em;
  }
`;

const TabContent = styled.div`
  display: flex;
`;

const Tab = styled.div`
  h3 {
    margin-top: 0.5em;
    margin-bottom: 0.2em;
  }
  &.active {
    border-bottom: 4px solid ${(props) => props.theme.colorPalette.red};
  }
`;

const Tabs = ({ list, contents }) => {
  const [activeTab, setActive] = useState(list[0]);
  return (
    <TabsWrapper>
      <TabList>
        {list.map((tabName) => (
          <Tab
            onClick={() => setActive(tabName)}
            className={tabName === activeTab ? 'active' : 'inactive'}
            key={tabName}
          >
            <h3>{tabName}</h3>
          </Tab>
        ))}
      </TabList>
      <TabContent>
        {contents.map((project) => (project.type !== activeTab ? undefined : project.name))}
      </TabContent>
    </TabsWrapper>
  );
};

export default Tabs;
