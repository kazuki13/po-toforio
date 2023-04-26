
import '../scc/heder.css';
import '../scc/detail.css';


function App() {
  return (

  <div>
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
    
    <main class="frame">
      <div class="title">
        <h1>
          <center>忘れん坊</center>
          <hr class ="hr1"/>
        </h1>
      </div>
      <div class="substance">
        <p>

        </p>
      </div>
    </main>
    
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