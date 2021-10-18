'use strict'

var gProjects = []

function createPorjects() {
  gProjects = [
    {
      id: 'minesweeper',
      name: 'Minesweeper',
      title: 'Legendary Bomb Defuser',
      desc: 'Old school minesweeper with extra modes',
      url: 'https://beku1.github.io/Minesweeper/',
      publishedAt: '6/10/2021',
      labels: ['Matrix', 'JS', 'CSS'],
    },
    {
      id: 'pacman',
      name: 'Pacman',
      title: 'Budget Pacman',
      desc: 'The Main character is a yellow circle, your mission is to eat all food and dont get caught by ghosts,if you eat cherry get ready to get an revenge on those ghosts!!!',
      url: 'https://beku1.github.io/Pacman/',
      publishedAt: '3/10/2021',
      labels: ['matrix', 'JS', 'CSS'],
    },
    {
      id: 'guess-me',
      name: 'Guess Me',
      title: 'Budget Akinator',
      desc: 'I can guess who you think of , if you think about the same person in 2 round',
      url: 'https://beku1.github.io/GuessMe-Ex-startHere-1.1/',
      publishedAt: '17/10/2021',
      labels: ['localStorage', 'JS ', ' CSS ', ' JQuerry'],
    },
  ]
}

function createProject(id, name, title, desc, url, publishedAt, labels) {

}

function getProjs() {
  return gProjects
}

function getProjectById(id){
   var projects = getProjs()
   var project = projects.filter(val =>{
       
       if(val.id===id) return val
   })
 return project
}
