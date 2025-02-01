


window.onload = function() {

    const noButton =  document.getElementById('no-button')
    const yesButton =  document.getElementById('yes-button')
    const message =  document.getElementById('additional-message')
    
    const fakeButton = document.getElementById('fake-button')
    placeFakeButtonRandomly();
    
    var noButtonClickCnt = 0;

    noButton.onclick = () => {
        noButtonClickCnt++;
        noButton.style.opacity = 0;
        fakeButton.style.display = "block";
        document.getElementById('additional-message').style.opacity = 1;
        
    }

    fakeButton.onclick = () => {
        
        noButtonClickCnt++;
        placeFakeButtonRandomly();

        console.log(message)
        if (noButtonClickCnt%2==0)
        {
            
            if(message.style.fontSize != "")
            {
                message.style.fontSize = `${Math.min(parseFloat(noButtonClickCnt*15), 120)}px`;
            }
            else{
                message.style.fontSize = "2.7rem";
            }
        }
        else if (noButtonClickCnt > 9)
        {
            noButton.style.display = "none";
            fakeButton.style.display = "none"
            yesButton.style.width = "100%";
            message.style.fontSize = "2.7rem"
            message.innerHTML = "I do not  negotiate..."
        }
        
    }


    yesButton.onclick = () => {
        fakeButton.style.display = "none"
        yesButton.style.display = "none";
        noButton.style.display = "none";
        message.style.fontSize = "2.7rem"
        message.style.opacity = 1
        message.innerHTML = "Good choice my love ;)"
        document.getElementById('question').innerHTML = "<h1>This rose is for U pretty girl</h1>"
        document.getElementById('rose').style.display="block"


    }
}

function placeFakeButtonRandomly() {
    const fakeButton = document.getElementById('fake-button');

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomTop = Math.floor(Math.random() * (viewportHeight - fakeButton.offsetHeight - 40));
    const randomLeft = Math.floor(Math.random() * (viewportWidth - fakeButton.offsetWidth - 40));
    fakeButton.style.top = `${randomTop}px`;
    fakeButton.style.left = `${randomLeft}px`;

}