
const itemsContainerElement = document.querySelector(".items-container");
let bagItems=[];
onload();
function onload(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[];
    displayItemsHomePage();
    displayBagIcon();

}
function displayBagIcon(){
    let bagItemCountElem=document.querySelector('.bag-item-count');
        if(bagItems.length>0){
        bagItemCountElem.style.visibility='visible';
        bagItemCountElem.innerHTML=bagItems.length;
    }else{
        bagItemCountElem.style.visibility='hidden';
        
    }
}
function displayItemsHomePage(){
    if(!itemsContainerElement){
        return;
    }
    let innerhtm='';
    items.forEach(item=>{
        innerhtm+=`<div class="item-container">
                    <img src="${item.item_image}" alt="item image">
                    <div class="rating">
                        ${item.rating.star}⭐|${item.rating.no_of_review}
                    </div>
                    <div class="company">
                       ${item.company_name}
                    </div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.price.current_price}</span><span class="original-price">Rs ${item.price.original_price}</span><span class="discount">(${item.price.discount}% off)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
                </div>`
    })
    itemsContainerElement.innerHTML=innerhtm;
}
function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

