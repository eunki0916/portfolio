import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <div className="about_wrap">
      <h2>안녕하세요, 홍은기입니다.</h2>
      <p>
        새로운것을 배우는걸 즐겨하며, <br />
        스스로 부족한 부분을 잘 알기에 개발 공부하는 것이 즐겁습니다.
        <br />
        앞으로도 계속 성장하는 개발자가 되고싶습니다.
      </p>
      <div className="profile_wrap">
        <div className="career">
          <h3>경력</h3>
          <p>솔직담백스튜디오(2017.02~ 22.04)</p>
          <p>
            프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정
            (22.07.13~23.01.05)
          </p>
        </div>
      </div>
      <div className="skills">
        <h3>사용 기술과 경험</h3>
        <div className="skill_wrap">
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt=""
            />
            <div className="skill_about">
              <h3>CSS & SCSS</h3>

              <p>
                - css를 컴포넌트화 하여 모듈 형태로 개발할 수 있습니다.
                <br />
                - Mixin을 활용할 수 있습니다.
                <br />- 함수와 조건문을 사용할 수 있습니다.
              </p>
            </div>
          </a>
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/220px-HTML5_logo_and_wordmark.svg.png"
              alt=""
            />
            <div className="skill_about">
              <h3>HTML</h3>
              <p>
                - 반응형/적응형 개발 경험이 있습니다.
                <br />- 애니메이션 활용 가능합니다.
              </p>
            </div>
          </a>
          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
            <div className="skill_about">
              <h3>Javascript</h3>
              <p>
                - 기본적인 자바스크립트 문법에 대해 이해하고 있습니다.
                <br />
                - 함수를 만들어 사용하고 인자를 전달할 수 있습니다.
                <br />- 배열과 객체 문법에 대해서 이해하고 있습니다.
                <br />- ES6 문법에 대해 꾸준히 공부하고 있습니다.
              </p>
            </div>
          </a>

          <a href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
              alt=""
            />
            <div className="skill_about">
              <h3>React</h3>
              <p>
                - 리액트 프로젝트 경험이 있습니다.
                <br />
                - 기본 문법에 대한 이해가 있습니다.
                <br />
                - React hooks 사용 경험이 있습니다.
                <br />
                - Router를 이용한 SPA 개발 경험이 있습니다.
                <br />
                - 함수형 컴포넌트를 만들어 props를 전달하고 받을 수 있습니다.
                <br />
                - React Bootstrap / Styled-components / SCSS / css-module을
                사용할 수 있습니다.
                <br />- axios를 이용하여 API 데이터를 받아와, 컴포넌트에
                데이터를 바인딩한 경험이 있습니다.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
