// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('recipes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
      renderRecipe(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      // remove the document data from the web page
      removeRecipe(change.doc.id);
    }
  });
});

//add item
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const recipe = {
    name: form.title.value,
    ingredients: form.ingredients.value,
    grandslam: form.tournamentselect.value,
    player1name: form.player1name.value,
    player2name: form.player2name.value,
    score: form.score.value,
    pwinner: form.pwinner.value,
    
  };

  db.collection('recipes').add(recipe)
    .catch(err => console.log(err));

  form.title.value = '';
  form.ingredients.value = '';
  form.grandslam.value = '';
});

//delete item
const recipeContainer = document.querySelector('.recipes');
recipeContainer.addEventListener('click', evt => {
  console.log(evt);
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    db.collection('recipes').doc(id).delete();
  }
});