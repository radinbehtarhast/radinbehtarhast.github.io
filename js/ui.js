const recipes = document.querySelector('.recipes');

document.addEventListener('DOMContentLoaded', function() {
  // menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});
const renderRecipe = (data, id) => {

  const html = `   
          <div class="col s12 m6" data-id="${id}">
            <div class="card sticky-action" style="overflow: visible;">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="img/tennis.jpg">
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${data.player1name} Vs. ${data.player2name} at ${data.grandslam}<i class="material-icons right">more_vert</i></span>

                <p>Click to see more</p>
              </div>

              <div class="card-action">
                <div class="recipe-delete">
                  <i href ="#" class="material-icons" data-id="${id}">delete</i>
                </div>
                <a href="#"></a>
              </div>

              <div class="card-reveal" style="display: none; transform: translateY(0%);">
                <span class="card-title grey-text text-darken-4">${data.name}<i class="material-icons right">close</i></span>
                <p><b>Score:</b></p>
                <p>${data.score}</p>
                <br>
                <p><b>Descripton:</b></p>
                <p>${data.ingredients}</p>
                <br>
                <p><b>Winner:</b></p>
                <p>${data.pwinner}</p>
              </div>
            </div>
          </div>
  `;
  recipes.innerHTML += html;

};

const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.remove();
};



//<div class="recipe-delete"> add this to make deleting work