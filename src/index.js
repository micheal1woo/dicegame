import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
  <h1 id="title">가위바위보</h1>
  <button className="hand">가위</button> 
  <button className="hand">바위</button>
 <button className="hand">보</button>
 </div>
);