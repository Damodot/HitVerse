let myDisplay = document.querySelector('.firstCont')
let songListed = document.querySelector('.songList')
let soundList = document.querySelector('.soundCheckList')
let popList = document.querySelector('.popList')

function songList() {
    if (myDisplay.style.display === '' || myDisplay.style.display === `block`) {
        myDisplay.style.display = `none`
        songListed.style.display = `block`
    } else {
        myDisplay.style.display = `block`
    }
}
function showSongList() {
    if (songListed.style.display === `block`) {
        songListed.style.display = `none`
        myDisplay.style.display = `block`
    } else {
        songListed.style.display = `block`
    }
}
console.log('hello');
function dispSoundCheck() {
    if (soundList.style.display === `block`) {
        soundList.style.display = `none`
    } else {
        soundList.style.display = `block`
    }
}
function dispPop() {
    if (popList.style.display === `block`) {
        popList.style.display = `none`
    } else {
        popList.style.display = `block`
    }
}