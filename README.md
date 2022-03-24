# Nutrient Calculator
### Technologies

Language: **Typescript**
Library/Framework: **React**  
State Management: **Redux Toolkit**  
Querying: **Axios**  
Styling: **CSS Modules**  
Animations: **React Transition Group**  

Layer system: kinda **Clean Architecture**

------------


### About project

1) Add necessary products to the list (food set)  
2) Set the quantity of the daily intake of each product  
3) See the results* by opening total nutrients  

> Results includes: 
-Percentage of each nutrient compared with normal daily intake  
(With colored progress bar for the better experience)  
-Each nutrient has lens button for filtering products by nutrient content richness  
(Filtered products has additional percentage information about that specific nutrient)  

4) You can save your products (food set) to the Collection*  

> Collection consits of items, each of which is your saved food set

5) If the product you want to add not in the initial list, you can use *SearchApi*  

**Initial list** (quick access food) is the static product list, so there is no query and it is smooth for filtering by words in search field or by nutrient richness.  
(Could implement fetching all products from USDA database on mount and pagination for a smoothness. Maybe in future. By now loading static "fake database" file suits well as for me except the small variety of products, that I need to update periodically).

**Search API** page uses the API of USDA (The United States Department of Agriculture) through some "middleware" (services/fetchFoodAdapter) to get rid of odd nutrients and products that don't have all necessary nutrients, also combining few different forms of certain vitamin in one. 
By search field you can make query to the database and get products suit the search criteria. Then you can add product to your list (food set).

6) You can add product from initial list (and therefore from food set if you added product to it) to the **favourites** by clicking the star icon (implemented by kinda synchronizing between redux store and local storage)

### Refactoring needs

-Split UI and Complex Logic in some components  
-Renaming as some namings maybe confusing   

-Remove CollectionItem type (need to think)  
CollectionItem type is the same as FoodSet type but with additional properties: Id and name. Maybe get rid of CollectionItem type and use FoodSet type in the Collection? (By adding Id and name right into Food Set type itself). 

**Good**: easier to understand app entities  
**Bad**: when FoodSet is added (copies) to Collection - it is the PART of Collection (that's why it is CollectionItem type; FoodSet -> copy -> CollectionItem). There is new meaning for the entity semantic and no connection with past usage (it just copies from main page user products to the collection). If we get rid of CollectionItem type and make FoodSet type common for both cases - we gonna mix two different structures semantically (main page user products that kinda global and user products as part of the Collection). 

-Split big module files into multiple small if there are functions with different responsibilities

#### Feature needs
-Add rest animations
