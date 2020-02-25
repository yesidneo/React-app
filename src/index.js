//const element = document.createElement('h1')
//element.innerText = 'hello neo'

//const container = document.getElementById('root')

//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'yam',
    lastName: 'aguirre',
    avatar: 'https://www.facebook.com/photo.php?fbid=10204784403915169&set=a.1617812450434&type=3&theater'
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
     
}


function getGreeting(user){
    if(user){
        return <h1>Hello {getName(user)} Neo</h1>
    }

    return <h1>Hello stranger Neo</h1>


}
const name = 'Yesid' 
  
const element = <div>{getGreeting(user)}</div>
const container = document.getElementById('root')

ReactDOM.render(element, container)

