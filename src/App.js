import './App.css';
import '../src/css/header.css'
import '../src/css/main.css'
import '../src/css/footer.css'

import intro from './intro.png'
import info01 from './info01.png'
import info02 from './info02.png'
import info03 from './info03.png'
import info04 from './info04.png'

import useMoveScroll from './function/useMoveScroll';


function App() {

  const moveTabs = {
    0: useMoveScroll('Intro'),
    1: useMoveScroll('Information'),
    2: useMoveScroll('Test'),
  };

  return (
    <>
      <header class="header">

{/* 네비 바 */}
        <div  class="homeBtn">
          <div>Welcome My Camp!</div>
        </div>
        <div class="navbar">
          <div class="introBtn" onClick={moveTabs[0].onMoveToElement}>소개</div>
          <div class="infoBtn" onClick={moveTabs[1].onMoveToElement}>상세 보기</div>
          <div class="testBtn" onClick={moveTabs[2].onMoveToElement}>적성 알아보기</div>
        </div>
      </header>


{/* 소개 */}
      <main class="main">
        <div ref={moveTabs[0].element} class="intro">
          <img src={intro} class="introImg" />
        </div>

{/* 상세보기 */}
        <div ref={moveTabs[1].element} class="info">
          <input type="radio" name="slide" id="slide01" checked></input>
          <input type="radio" name="slide" id="slide02"></input>
          <input type="radio" name="slide" id="slide03"></input>
          <input type="radio" name="slide" id="slide04"></input>

          <div class="slidewrap">
            <ul class="slidelist">
              <li>
                <a>
                  <label for="slide04" class="left" />
                  <img src={info01} />
                  <label for="slide02" class="right" />
                </a>
              </li>
              <li>
                <a>
                  <label for="slide01" class="left" />
                  <img src={info02} />
                  <label for="slide03" class="right" />
                </a>
              </li>
              <li>
                <a>
                  <label for="slide02" class="left" />
                  <img src={info03} />
                  <label for="slide04" class="right" />
                </a>
              </li>
              <li>
                <a>
                  <label for="slide03" class="left" />
                  <img src={info04} />
                  <label for="slide01" class="right" />
                </a>
              </li>
            </ul>
          </div>
        </div>


{/* 적성 알아보기 */}
        <div ref={moveTabs[2].element} class="test">
          <iframe 
            src="https://profound-melomakarona-39b3e1.netlify.app/" 
            width='100%' 
            height='95%' 
            className='testiframe'
          />
        </div>

      </main>


{/* 접수 화면 */}
      <footer class="footer">
        <form className='form'>
          <table className='table'>
            <tr>
              <td className='tablebox'>
                <input type="text" id="name" placeholder='이름' />
              </td>
              <td className='tablebox'>
                <input type="tel" id="tel" placeholder='연락처' />
              </td>
              <td>
                <label for="agreement">개인정보 취급 방침 동의</label>
                <input id="agreement" type="checkbox"/>
              </td>
              <td>
                <button className='tablebox' id="submit" type='submit'>접수하기</button>
              </td>
            </tr>
          </table>
        </form>
      </footer>
    </>
  );
}

export default App;
