

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = console.log((parseInt(i) + n))
  }
}

<main id="app">
      <ul class="unranked-list">
        <li>2</li>
        <li>5</li>
        <li>4</li>
      </ul>

      <ul class="ranked-list">
        <li>1</li>
        <li>2</li>
      </ul>

      <ul class="ranked-list">
        <li>12</li>
        <li>11</li>
        <li>10</li>
      </ul>
      

      
      
      
      
      
      
      
      
      
      