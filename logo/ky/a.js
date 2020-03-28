window.addEventListener('beforeinstallprompt', function(event){
    console.log('before add to home screen');
    event.preventDefault();
    promptInstall = event;
    return false;
});

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if(promptInstall){
    promptInstall.prompt()
    promptInstall.userChoice.then(function(choiceResult){
      console.log(choiceResult.outcome);
      if(choiceResult.outcome==='dismissed'){
        console.log('user cancelled installation');
      }else{
        console.log('user add to home screen');
      }
    });
    promptInstall = null;
  }
  // end of code
}
