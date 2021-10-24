function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/wbc-code' //Basta alterar o "wbc-code" para o seu nick do GitHub//

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
