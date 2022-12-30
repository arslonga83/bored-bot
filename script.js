
const activity = document.querySelector('#activity')

const getActivity = () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => activity.innerHTML = data.activity)
}


document.querySelector('#bored-btn').addEventListener('click', getActivity)