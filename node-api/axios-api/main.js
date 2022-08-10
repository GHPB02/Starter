const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
  name: "Olivia Zars",
  avatar: "http://picsum.photos/200/300",
  city: "Rio do Sul"
}

function getUser(id) {
  axios.get(`${url}/${id}`)
  .then(response => {
    userName.textContent = response.data.name
    userCity.textContent = response.data.city
    userAvatar.src = response.data.avatar
  })
  .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
  name: "Marcelo Clovis",
  avatar: "http://picsum.photos/200/300",
  city: "Recife"
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

getUsers()
//addNewUser(newUser)
getUser(2)
updateUser(3, userUpdated)
deleteUser(4)