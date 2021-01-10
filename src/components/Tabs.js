import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const TabsWrapper = styled.div`
  justify-content: left;
`;

const TabList = styled.div`
  margin: 0em 2em;
  display: flex;
  & div:not(:last-child) {
    margin-right: 2em;
  }
`;

const TabContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  min-height: 300px;
`;

const Tab = styled.div`
  h3 {
    color: ${(props) => props.theme.colorPalette.red};
    margin-top: 0.5em;
    margin-bottom: 0.2em;
  }
  h3:hover {
    color: ${(props) => props.theme.colorPalette.primaryButtonHover};
    cursor: pointer;
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
        {contents.map((project) => {
          if (project.type !== activeTab) return undefined;
          return <ProjectCard key={project.name} project={project} />;
        })}
      </TabContent>
    </TabsWrapper>
  );
};

export default Tabs;
