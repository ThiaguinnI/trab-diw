async function listarvideos(){
const baseUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=6ed441095924817636de00b2052eec12&language=en-US&page=1'
const baseVideos = 'https://api.themoviedb.org/3/movie/337404/videos?api_key=6ed441095924817636de00b2052eec12&language=en-US'
 


 let upCpmmingF = await fetch(baseUrl)
.then(data=> data.json())
.then(response=>{
    upcomming = []
    for(let i = 0; i <3; i++){
        upcomming.push(response.results[i])
    }
   
    return upcomming
})

for(let i = 0; i <3; i++){
       idVideo = await fetch(`https://api.themoviedb.org/3/movie/${upCpmmingF[i].id}/videos?api_key=6ed441095924817636de00b2052eec12&language=en-US`).then(data => data.json()).then(response=> response.results[0].key)
       upCpmmingF[i] = {...upCpmmingF[i],idVideo:idVideo}
      }



aranha = document.getElementById("miranha")
batman = document.getElementById("batman")
joker = document.getElementById("joker")


aranha.innerHTML = ` 
<iframe width="560" height="315" src="https://www.youtube.com/embed/${upCpmmingF[0].idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div class="descricaoL" >
<h1>${upCpmmingF[0].original_title}</h1>
<p><strong> Sinape: </strong> ${upCpmmingF[0].overview}</p><br />
<div class="descricaoM">
  <p><strong> Data de Lanc: </strong> ${upCpmmingF[0].release_date} </p>
  <p><strong> Rating: </strong> ${upCpmmingF[0].vote_average} </p>
  <p><strong> Estreia: </strong> 2017 </p>
</div>
</div>
`

batman.innerHTML = ` 
<iframe width="560" height="315" src="https://www.youtube.com/embed/${upCpmmingF[1].idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div class="descricaoL" >
<h1>${upCpmmingF[1].original_title}</h1>
<p><strong> Sinape: </strong> ${upCpmmingF[0].overview}</p><br />
<div class="descricaoM">
  <p><strong> Data de Lanc: </strong> ${upCpmmingF[1].release_date} </p>
  <p><strong> Rating: </strong> ${upCpmmingF[1].vote_average} </p>
  <p><strong> Estreia: </strong> 2017 </p>
</div>
</div>
`

joker.innerHTML = ` 
<iframe width="560" height="315" src="https://www.youtube.com/embed/${upCpmmingF[2].idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              <div class="descricaoL" >
<h1>${upCpmmingF[2].original_title}</h1>
<p><strong> Sinape: </strong> ${upCpmmingF[2].overview}</p><br />
<div class="descricaoM">
  <p><strong> Data de Lanc: </strong> ${upCpmmingF[2].release_date} </p>
  <p><strong> Rating: </strong> ${upCpmmingF[2].vote_average} </p>
  <p><strong> Estreia: </strong> 2017 </p>
</div>
</div>
`
}

listarvideos()

async function listarFilmes(){
  
let filmes = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6ed441095924817636de00b2052eec12&language=en-US&page=1").then(data=>  data.json()).then(response =>{
  F= []
  for(let i = 0; i <4; i++){
      F.push(response.results[i])
  }
 
  return F
})

console.log(filmes)
}
listarFilmes()