import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document.querySelector('.sidebar').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.sidebar');
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add('is-sticky');
    } else {
      sidebarEl.classList.remove('is-sticky');
    }
  }

  return (
    <div className="app">
      <h3>Sticky element on a scroll in React - <a href="https://www.cluemediator.com" target="_blank" rel="noreferrer noopener">Clue Mediator</a></h3>
      <div className="row">
        <div className="col-8">
          {[...Array(20)].map((a, i) => (
            <div key={i} className="item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          ))}
        </div>
        <div className="col-4">
          <div className="sidebar" style={{ width: sidebarWidth }}>
            <h3>Sidebar</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;