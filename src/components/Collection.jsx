import React from 'react';
import Chicken from "./Chicken";

function Collection() {
    return (
        <div>
            <Chicken 
                title="Roast Chicken"
                img="https://www.andrekrief.fr/wp-content/uploads/2023/02/Poulet-roti.jpg"
                caption="A whole chicken seasoned and cooked in the oven or on a rotisserie to achieve a crispy skin and tender, juicy meat."
            />
            <Chicken 
                title="Fried Chicken"
                img="https://www.cookomix.com/wp-content/uploads/2021/08/tenders-poulet-thermomix-800x600.jpg"
                caption="Pieces of chicken coated in crispy batter and fried in oil until golden and crispy."
            />
            <Chicken 
                title="Grilled Chicken"
                img="https://media.istockphoto.com/id/1268693109/fr/photo/poulet-r%C3%B4ti.jpg?s=612x612&w=0&k=20&c=YRcePJzn_VcHQ8TieftWSMftE_tetuC4gZPXXV4o-Lk="
                caption="Chicken pieces marinated and grilled on a barbecue or grill, often with different sauces or marinades to add flavor."
            />
            <Chicken 
                title="Chicken Curry"
                img="https://sunandgreen.fr/wp-content/uploads/2019/10/poulet_au_curry_et_oignons_recette_epices.jpg"
                caption="A dish of chicken cooked in a spicy sauce, often made with tomatoes, spices, coconut milk, and aromatic herbs."
            />
            <Chicken 
                title="Sautéed Chicken"
                img="https://www.academiedugout.fr/images/24167/948-580/poulet_a_la_poitevine.eps.jpg?poix=50&poiy=50"
                caption="Pieces of chicken quickly cooked over high heat in a skillet or wok with vegetables, sauces, and spices."
            />
            <Chicken 
                title="Butter Chicken"
                img="https://chefcuisto.com/files/2016/08/poulet-beurre.jpg"
                caption="An Indian dish where chicken is cooked in a sauce made of butter, tomatoes, spices, and cream."
            />
            <Chicken 
                title="Teriyaki Chicken"
                img="https://www.hervecuisine.com/wp-content/uploads/2016/01/recette-poulet-teriyaki-1280x720.jpg"
                caption="Chicken marinated in a sweet-salty teriyaki sauce made with soy sauce, sugar, mirin, and sake, then cooked or grilled."
            />
            <Chicken 
                title="Chicken with Potatoes"
                img="https://img.mesrecettesfaciles.fr/2023-02/poulet-a-loriental-et-pommes-de-terre-au-four-vqg2.webp"
                caption="Pieces of chicken baked with potatoes, usually seasoned with herbs and spices."
            />
        </div>
    )
}

export default Collection;
