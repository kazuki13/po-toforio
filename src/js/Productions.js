
import '../scc/heder.css';
import '../scc/Productions.scss';


function App() {
  return (

 <div>
    <div class = "root2">
    <header class="header">
    <h1 class="header-logo"><a href="/">村山一輝</a></h1>

    <nav class="header-nav">
        <ul class="header-list">
            <li class="header-item"><a href="/">HOME</a></li>
            <li class="header-item"><a href="/Productions">制作物</a></li>
            <li class="header-item"><a href=""> </a></li>
            <li class="header-item"><a href=""> </a></li>
            <li class="header-item"><a href=""> </a></li>
        </ul>
    </nav>
</header>
      <main class = "test_a">
        <div class="entries">
        <div class="entry">
          <div class="title_name"><a  href="/wasurenbou">忘れん坊</a></div>
          <div class="title_year"><a >2021年 5月～8月</a></div>
          <div class="body">
            <p>
              忘れ物をしないように、自動的に音声を読み取り要点をまとめる  
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title_name big"><a  href="E-gate">E-gate</a></div>
          <div class="title_year"><a >2021年 8月 ~ </a></div>
          <div class="body">
            <p>
            azureを活用した自動顔認証システム
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title_name"><a  href="/souseki">漱石</a></div>
          <div class="title_year"><a >2021年 5月 ～ 2022 2月</a></div>
          <div class="body">
            <p> 指定の猫のみに自動で餌をあげるjetbotの制作</p>
          </div>
        </div>
        <div class="entry">
          <div class="title_name big"><a  href="/satoukibi">サトウキビプロジェクト</a></div>
          <div class="title_year"><a >2022年 4月 ～ </a></div>
          <div class="body">
            <p> サンゴ礁を守るために、海への赤土の流出を防ぐ... </p>
          </div>
        </div>
        <div class="entry">
          <div class="title_name"><a  href="/Wannyannet">Wannyannet</a></div>
          <div class="title_year"><a >2022年 8月～ 2023 2月</a></div>
          <div class="body">
            <p> 動物病院での診断結果や処置を共有できるサービス</p>
          </div>
        </div>
        <div class="entry">
          <div class="title_name big"><a href="/other">その他</a></div>
          <div class="body">
            <p>
              ・顔認証<br/>
              ・LI-FE<br/>
              ・φωτίζω（ふぉてぃーぞ）
            </p>
          </div>
        </div>
        {/* <div class="entry">
          <div class="title_year">2017</div>
          <div class="body">
            <p>Qui facere eos aut suscipit doloremque quos...</p>
          </div>
        </div> */}
      </div>
      </main>
      </div>
    <footer class="footer">
      <div>
        フッターエリア
      </div>
    </footer>
  </div>
  );
}

// document.puerySelector('input').addEventListener('change', (evt) =>{
//   console.log(evt.target.files[0]);
// });

export default App;
