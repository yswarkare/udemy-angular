import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

const recipes = [
  new Recipe(
    "Kadhai Paneer",
    "Kadhai Paneer is a vibrant, tangy, deeply spiced paneer recipe that is perfect for enjoying all year round. Made with pantry staples like onions, tomatoes, capsicum (green bell peppers) and Indian spices, this bright dish comes together in 30 minutes. I share two ways to make this curry – a semi dry restaurant style version and a spicy home style gravy.",
    "https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg",
    [
      new Ingredient("Paneer", "8"),
      new Ingredient("Capsicum", "2"),
      new Ingredient("Onions", "1"),
      new Ingredient("Tomatoes", "2"),
      new Ingredient("Paprika", "2"),
      new Ingredient("Coriander", "2"),
    ]
  ),
  new Recipe(
    "Spiced Pan-Fried Paneer",
    "A spicy paneer recipe, paneer is fried on pan with some spices.",
    "https://healthynibblesandbits.com/wp-content/uploads/2018/06/Spiced-Pan-Fried-Paneer-2.jpg",
    [
      new Ingredient("Paneer", "8"),
      new Ingredient("paprika", "2"),
      new Ingredient("Cumin", "2"),
      new Ingredient("Coriander", "2"),
    ]
  ),
  new Recipe(
    "Paneer Butter Masala",
    "Paneer Butter Masala Recipe is one of India’s most popular paneer preparation. This restaurant style recipe with soft paneer cubes dunked in a creamy, lightly spiced tomato sauce or gravy is a best. This rich dish is best served with roti or chapati, paratha, naan or rumali roti.",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg",
    [
      new Ingredient("Paneer", "8"),
      new Ingredient("Butter", "1"),
      new Ingredient("Onions", "1"),
      new Ingredient("Tomatoes", "2"),
      new Ingredient("Paprika", "2"),
      new Ingredient("Coriander", "2"),
    ]
  ),
  new Recipe(
    "Matar Pulao",
    "Paneer Butter Masala Recipe is one of India’s most popular paneer preparation. This restaurant style recipe with soft paneer cubes dunked in a creamy, lightly spiced tomato sauce or gravy is a best. This rich dish is best served with roti or chapati, paratha, naan or rumali roti.",
    "https://hebbarskitchen.com/wp-content/uploads/2024/02/Matar-Pulao-Recipe-Green-Peas-Pulao-Recipe-Matar-Rice-Green-Peas-Pulav-17-696x696.jpeg.webp",
    [
      new Ingredient("Rice", "1"),
      new Ingredient("Peas", "2"),
      new Ingredient("Carrot", "2"),
      new Ingredient("Paneer", "8"),
      new Ingredient("Onions", "1"),
      new Ingredient("Coriander", "2"),
    ]
  ),
  new Recipe(
    "Veg Burger",
    "Veggie burgers have become a popular healthy alternative to meat based burgers. These days, grocery stores and restaurants are offering many options, that try to mimic a meat texture, to custom made black bean and veggie patties and more. This Burger Recipe covers everything needed to make delightful veggie burgers from scratch, including how to prepare and pan fry delicious homemade vegetable patties. And because no veggie burger is complete without its own special sauce, I have included instruction on how to make the perfect tangy, sweet and spicy mayonnaise dressing.",
    "https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg",
    [
      new Ingredient("Buns", "2"),
      new Ingredient("Cheese", "2"),
      new Ingredient("Potatoes", "2"),
      new Ingredient("Tomatoes", "1"),
      new Ingredient("Onions", "1"),
      new Ingredient("Coriander", "2"),
    ]
  ),
];

export default recipes;
