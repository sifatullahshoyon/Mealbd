const loadMeal = (id) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
    .catch(err => console.log(err))
};

const displayMeal = (meals) => {
    const mealContainer = document.getElementById('food-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card card-side w-full h-96 bg-base-100 shadow-xl">
            <figure class="w-2/4"><img src="${meal.strMealThumb}" alt="Movie" class="w-full h-full"/></figure>
            <div class="card-body w-2/4">
              <h2 class="card-title text-2xl font-primary font-bold">${meal.strMeal}</h2>
              <p class="text-xl leading-8 text-zinc-600	">There are many variations of passages of available, but the majority have suffered</p>
              
              <label for="my_modal_6" class="cursor-pointer underline text-yellow-400 font-bold text-xl" onclick="(singleCardDitels('${meal.idMeal}'))">View Details</label>
              
            </div>
          </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
};

const singleCardDitels = (value) => {
    const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value}`;
    fetch(URL)
    .then(res => res.json())
    .then(data => viewDitales(data.meals[0]))
    .catch(err => console.log(err))
};

const viewModal = document.getElementById('modal');
const viewDitales = (singleData) => {
    // console.log(singleData);
    const div = document.createElement('div');
    div.classList.add('modal')
    div.innerHTML= `
    <div class="modal-box">
    <h3 class="font-bold text-2xl">${singleData.strMeal}</h3><br>
    <hr class="pb-3.5">
    <img src="${singleData.strMealThumb}" alt=""><br>
    <h4 class="pb-2.5"><span class="font-primary font-bold">Category</span> : ${singleData.strCategory}</h4>
    <h5><span class="font-primary font-bold">Area</span> : ${singleData.strArea}</h5>
    <p class="py-4"><span class="font-primary font-bold">Instructions</span> : ${singleData.strInstructions.slice(0,200)}</p>
    <p><span class="font-primary font-bold">Youtube</span> : ${singleData.strYoutube}</p>
    <div class="modal-action">
      <label for="my_modal_6" class="btn bg-rose-600 hover:bg-rose-700 text-white">Close</label>
    </div>
  </div>
    `;
    viewModal.appendChild(div);
    
};

const searchMeal = (value) => {
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    loadMeal(searchText);
    // showMeal(id);
};

loadMeal('fish');


// const showMeal = () => {
//     const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`;
//     fetch(URL)
//     .then(res => res.json())
//     .then(data => displayMeal(data))
//     .catch(err => console.log(err))
// };

