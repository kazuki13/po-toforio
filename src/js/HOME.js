
import '../scc/heder.css';



function App() {
  return (

  <div class = "root">
    <header class="header2">
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

    <main class = "test">
      <div class = "main_title">
        E-gate
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