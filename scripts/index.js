const itemsContainerElement = document.querySelector(".items-container");
let items={
    item_image:'images/1.jpg',
    rating:{
        star:'4.5',
        no_of_review:'1400'
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
    price:{
        current_price:606,
        original_price:'1045',
        discount:'42'
    }


}
itemsContainerElement.innerHTML=`<div class="item-container">
                <img src="${items.item_image}" alt="item image">
                <div class="rating">
                    ${items.rating.star}⭐|${items.rating.no_of_review}
                </div>
                <div class="company">
                   ${items.company_name}
                </div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${items.price.current_price}</span><span class="original-price">Rs ${items.price.original_price}</span><span class="discount">(${items.price.discount}% off)</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>`;