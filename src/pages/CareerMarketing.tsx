import useFolderScroll from "../hooks/FolderScrollHook";
import { useRef } from "react";

// styles.ts
import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #FFF;
  top: 0;
  width: 100%;
  height: 4vh;
  border-bottom: 1px solid #191919;
  display: flex;
  align-items: center;
  padding-left: 5vh;
  font-size: 2vh;
`;

export const StartScreen = styled.div`
  padding-top: 4vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6vh;
  text-align: center;
`;

export const MainContent1 = styled.div`
  background-color: #ebefd6;
  border-top: 1px solid #191919;
  border-bottom: 1px solid #191919;
  width: 100%;
  height: 500vh;
  margin-bottom: 100vh;
`;

export const StickyTitle = styled.div`
  width: 100%;
  height: 76vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #FAFAFA;
`;

export const Title = styled.div`
  border-top: 1px solid #191919;
  background-color: #FFF;
  height: 6vh;
  display: flex;
  align-items: center;
  font-size: 2vh;
  padding-left: 3vh;
`;

export const Content = styled.div`
  height: calc(96vh - 6vh * 4);
`;


const App: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useFolderScroll(mainContentRef, stickyRef);

  return (
    <>
      <MainContent1 ref={mainContentRef} className="main-content-1">
        <Sticky ref={stickyRef} className="sticky">
          <StickyTitle>Inspired By <br />https://www.appart.agency/</StickyTitle>
          {Array.from({ length: 4 }, (_, i) => (
            <Section className={`section section-${i + 1}`} key={i}>
              <Title className="title">TITLE #{i + 1}</Title>
              <Content className="content" />
            </Section>
          ))}
        </Sticky>
      </MainContent1>
    </>
  );
}

export default App;