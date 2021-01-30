const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {

      //esercizio1
      let filteredID = data.filter(e => e.userId === 4)
      filteredID.forEach(e => console.log(e.id)) 

      //esercizio2
      let filteredID2 = data.filter(e => e.id%2!==0)
      filteredID2.forEach(e => console.log(e.id))

      //esercizio3
      let titleFiltered = data.filter(e => e.title.split(" ").length%2===0)
      titleFiltered.forEach(e => console.log(e.title))

      //esercizio4
      let bodyFiltered2 = data.filter(e => e.body.length%3===0)
      bodyFiltered2.forEach(e => console.log(e.title))

      //esercizio5
      let bodyFiltered3 = data.filter(e => e.title[0] === "s")
      bodyFiltered3 = data.reduce((acc, e) => acc += e.body + " ", "")
      console.log(bodyFiltered3)

    })
