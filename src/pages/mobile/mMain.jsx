import React from "react";
import styled from "styled-components";
import MHeader from "../../components/atoms/Header/mHeader";
import MFooter from "../../components/atoms/Footer/mFooter";
// 말풍성 생성시 스크롤 맨밑으로
// input 크기 넓어지면 커지는 동적 width /height
const Container = styled.div`
  background-color: #ddd;
  height: 100%;
  //width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  & section {
    background-color: #eee;
    border-radius: 8px;
    padding: 8px;
    min-height: 720px;
    height: 100%;
  }
  & .chatroom {
    height: 940px;
    min-height: 640px;
    background-color: black;
    overflow-y: auto;
  }
  & section article div {
    margin: 1rem 0;
  }
  & section .ai {
    display: flex;
    justify-content: flex-start;
  }
  & section .ai > span {
    display: inline-block;
    height: 100%;
    text-align: left;
    background-color: #fff;
    padding: 4px;
    border-radius: 8px;
    margin-left: 8px;
  }
  & section .user {
    display: flex;
    justify-content: flex-end;
  }
  & section .user > span {
    height: 100%;
    background-color: #aaa;
    padding: 4px;
    border-radius: 8px;
    margin-right: 8px;
  }
`;
function MMain({ data }) {
  console.log(data);

  // mChat 부분 테스트
  return (
    <Container>
      {/* 모바일 헤더 부분 */}
      <MHeader />
      {/* <header> */}
      {/*   <button type="button">뒤로가기 버튼</button> */}
      {/*   <h1> */}
      {/*     <a href="#!">로고이미지</a> */}
      {/*   </h1> */}
      {/*   <button type="button">버튼</button> */}
      {/* </header> */}
      {/* 모바일 채팅 부분 */}
      <main>
        <section className="chatroom">
          <article>
            <h2>Room Title</h2>
          </article>
          <article className="chatBubble">
            {data[0] &&
              data[0].map((value) => (
                <div className={value.sender} key={Date.now()}>
                  <span>{value.message}</span>
                </div>
              ))}
          </article>
        </section>
      </main>
      <MFooter />
    </Container>
  );
}

export default MMain;