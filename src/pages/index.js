import React from 'react';
import styled from 'styled-components';
import Home from '../components/Home';

const PageWrapper = styled.div`
  display: block;
`;

export default function Main() {
  return (
    <PageWrapper>
      <main className="content">
        {/* Home */}
        <section id="home">
          <Home />
        </section>
      </main>
    </PageWrapper>
  );
}
