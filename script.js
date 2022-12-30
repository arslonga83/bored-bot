
const activity = document.querySelector('#activity')
const boredBtn = document.querySelector('#bored-btn')

const sound = new Audio('./little-robot-sound-84657.mp3')

let isWaiting = false;

const getActivity = () => {
  if (!isWaiting) {
    isWaiting = true;
    sound.play();
    activity.textContent = 'Processing...'
    setTimeout(() => {
    fetch('https://apis.scrimba.com/bored/api/activity')
      .then((response) => response.json())
      .then((data) => activity.innerHTML = `
        <span class="animate__animated animate__fadeIn animate__slower">${data.activity}</span>`)
    isWaiting = false;
    }, 9000)
    
  }

}

boredBtn.addEventListener('click', getActivity)