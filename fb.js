const videoPopup = document.getElementById('video-popup')
const popupClosebtn = document.getElementById('close-popup')
const videoInfo = document.getElementById('video-info')
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    // navbar.classList.remove('active');
}


async function football() {
   const response = await fetch('https://www.scorebat.com/video-api/v1/');
   const data = await response.json();
   console.log(data)  

   
  //  const empty = document.querySelector('.empty');
    data.forEach(movie => {
      const footballEl = document.createElement('div');
      footballEl.classList.add('football');
      footballEl.style.float='left';
      // footballEl.style.paddingBottom='50px';
      footballEl.classList.add('disp');

      footballEl.innerHTML = `
      <img src="${movie.thumbnail}" alt="">

      <div class="football-info">
          <h5>${movie.title}</h5>
      </div>
      `
      document.body.appendChild(footballEl)
      // empty.appendChild(footballEl);



      footballEl.addEventListener('click', () =>{
        update(movie)
      })


    })


}

football()
popupClosebtn.addEventListener('click', () =>{
  videoPopup.classList.add('hidden')
});

function update(data){
   videoInfo.innerHTML = '';
   const videoEl = document.createElement('div')

   videoEl.innerHTML =`
   <h1>${data.title}</h1>
   ${data.embed}
   <p>${data.competition.name}</p>
  `

   videoInfo.appendChild(videoEl)

  videoPopup.classList.remove('hidden')
}
