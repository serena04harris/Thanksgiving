
document.querySelector("input[type='submit']").addEventListener("click", function(event) {
    event.preventDefault(); 

  
    const email = document.getElementById("email").value;
    const todaysDate = document.getElementById("todaysdate").value;
    const recipeName = document.getElementById("recipename").value;
    const recipeType = document.getElementById("recipe").value;

  
    const ingredients = [];
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        if (checkbox.checked) {
            ingredients.push(checkbox.value);
        }
    });

    // general info stuff
    console.log("Email:", email);
    console.log("Today's Date:", todaysDate);
    console.log("Recipe Name:", recipeName);
    console.log("Ingredients:", ingredients.join(", "));
    console.log("Recipe Type:", recipeType);

    // alert that user sent recipe successfully
    alert("Thank you for submitting your recipe!");
});
