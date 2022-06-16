const BASE_URL = 'https://api.chucknorris.io/jokes/random'

const botao = document.getElementById('contar-piada')


const getPiada = async () =>{
   try{
       const data = await fetch(BASE_URL)
       const json = await data.json()
       return json.value
   }catch(e){
       console.log(e.message)
   }
}

const carregaPiada = async ()=>{
    const piadaCarregada = document.getElementById('piada')
    piadaCarregada.innerHTML = await getPiada();
}

botao.addEventListener('click', carregaPiada)
carregaPiada()






