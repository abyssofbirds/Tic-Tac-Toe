import React, { useEffect, useState } from 'react'
import './App.css'
import TicTacElement from './TicTacElement'
import Swal from 'sweetalert2'


const App = () => {

  // создаю массив из пустых значений
 
  const [TicTac, changeTable] = useState(new Array(9).fill(''))



  function handleChangeTable (num){
    changeTable(TicTac => {
      const newArr = [...TicTac]
      if (newArr[num-1]===''){ newArr[num-1]= 'x'} // пользователь ставит х 
      console.log(newArr);
      const freeSquares = [] // Массив из оставшихся пустых полей 
      var a = newArr.indexOf('')    
      while (a !== -1){
        freeSquares.push(a)
        a = newArr.indexOf('', a+1)
      }
      
      const randomElement = freeSquares[Math.floor(Math.random() * freeSquares.length)];

      newArr[randomElement] = 'o'      
     
      return newArr 
    }  
    
    )

    
}

const alertEndOfGame = () => {
  Swal.fire({
    title: 'Игра окончена. Ничья &#128528;',
    width: 600,
    padding: '3em',
    confirmButtonText: `Ok`,
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://c.tenor.com/5P2BiFhQVEsAAAAi/don%27t-know-confusing.gif")
      right bottom -70%
      no-repeat
    `
  }).then((result) => {
    if (result.isConfirmed) {
      changeTable(new Array(9).fill(''))
    } 
  })

}

const alertWin = () => {
  Swal.fire({
    title: 'Вы выиграли!!!',
    width: 600,
    padding: '3em',
    confirmButtonText: `Ok`,
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.pinimg.com/originals/4a/db/ca/4adbca36f44b37005a6f0c685f36117d.gif")
      left top
      no-repeat
    `
  }).then((result) => {
    if (result.isConfirmed) {
      changeTable(new Array(9).fill(''))
    } 
  })
}

const alertLoser = () => {
  Swal.fire({
    title: 'Вы проиграли(((',
    width: 600,
    padding: '3em',
    confirmButtonText: `Ok`,
    background: '#fff url(/images/trees.png)',
    customClass: {
      confirmButton: 'order-2',
    },
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media1.giphy.com/media/l4FGrgquGXeNOS8aA/giphy.gif")
      right bottom
      no-repeat
    `
  }).then((result) => {
    if (result.isConfirmed) {
      changeTable(new Array(9).fill(''))
    } 
  })

}

useEffect(()=>{
  if (TicTac[0] === 'x' && TicTac[0]===TicTac[1] && TicTac[0]===TicTac[2]){ // проверка первой строки на х
    alertWin()
  } else if (TicTac[3] === 'x' && TicTac[3]===TicTac[4] && TicTac[3]===TicTac[5]){ // проверка второй строки на х
    alertWin()
  } else if (TicTac[6] === 'x' && TicTac[6]===TicTac[7] && TicTac[6]===TicTac[8]){ // проверка третьей строки на х
    alertWin()
  } else if (TicTac[0] === 'x' && TicTac[0]===TicTac[3] && TicTac[0]===TicTac[6]){ // проверка первого столбца на х
    alertWin()
  } else if (TicTac[1] === 'x' && TicTac[1]===TicTac[4] && TicTac[1]===TicTac[7]){ // проверка второго столбца на х
    alertWin()
  } else if (TicTac[2] === 'x' && TicTac[2]===TicTac[5] && TicTac[2]===TicTac[8]){ // проверка третьего столбца на х
    alertWin()
  } else if (TicTac[0] === 'x' && TicTac[0]===TicTac[4] && TicTac[0]===TicTac[8]){ // проверка диагонали 1 на х
    alertWin()
  } else if (TicTac[2] === 'x' && TicTac[2]===TicTac[4] && TicTac[2]===TicTac[6]){ // проверка диагонали 2 на х
    alertWin()
  } else if (TicTac[0] === 'o' && TicTac[0]===TicTac[1] && TicTac[0]===TicTac[2]){ // проверка первой строки на o
    alertLoser()   
  } else if (TicTac[3] === 'o' && TicTac[3]===TicTac[4] && TicTac[3]===TicTac[5]){ // проверка второй строки на o
    alertLoser()
  } else if (TicTac[6] === 'o' && TicTac[6]===TicTac[7] && TicTac[6]===TicTac[8]){ // проверка третьей строки на o
    alertLoser()
  } else if (TicTac[0] === 'o' && TicTac[0]===TicTac[3] && TicTac[0]===TicTac[6]){ // проверка первого столбца на o
    alertLoser()
  } else if (TicTac[1] === 'o' && TicTac[1]===TicTac[4] && TicTac[1]===TicTac[7]){ // проверка второго столбца на o
    alertLoser()
  } else if (TicTac[2] === 'o' && TicTac[2]===TicTac[5] && TicTac[2]===TicTac[8]){ // проверка третьего столбца на o
    alertLoser()
  } else if (TicTac[0] === 'o' && TicTac[0]===TicTac[4] && TicTac[0]===TicTac[8]){ // проверка диагонали 1 на o
    alertLoser()
  } else if (TicTac[2] === 'o' && TicTac[2]===TicTac[4] && TicTac[2]===TicTac[6]){ // проверка диагонали 2 на o
    alertLoser()
  } else if (TicTac.includes('')===false){ //окончание игры, когда не осталось пустых клеток
    alertEndOfGame()  
  }
}, TicTac)

   
  

  return (
    <div className='mx-auto mt-5 my-app'>
      <h1 className='text-center font-weight-bold text-logo'>Tic-Tac-Toe</h1>
    <table className="table-bordered mx-auto mt-5">  
    <tbody>
    <tr>
      <TicTacElement 
        elem={TicTac[0]} 
        handleChangeTable={handleChangeTable}
        position={1} /> 
      <TicTacElement
        elem={TicTac[1]}
        handleChangeTable={handleChangeTable}
        position={2}/> 
      <TicTacElement 
        elem={TicTac[2]}
        handleChangeTable={handleChangeTable}
        position={3}/>
      
    </tr>
    <tr>
      <TicTacElement 
        elem={TicTac[3]}
        handleChangeTable={handleChangeTable}
        position={4}/>
      <TicTacElement 
        elem={TicTac[4]}
        handleChangeTable={handleChangeTable}
        position={5}/> 
      <TicTacElement 
        elem={TicTac[5]}
        handleChangeTable={handleChangeTable}
        position={6}/>
      
    </tr>
    <tr>
      <TicTacElement 
        elem={TicTac[6]}
        handleChangeTable={handleChangeTable}
        position={7}/>
      <TicTacElement 
        elem={TicTac[7]}
        handleChangeTable={handleChangeTable}
        position={8}/> 
      <TicTacElement 
        elem={TicTac[8]}
        handleChangeTable={handleChangeTable}
        position={9}/>
      
    </tr>
  </tbody>
</table>
</div>
  )
}

export default App