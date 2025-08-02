let bagItemObj;
bagOnload();
function bagOnload(){
    loadBagItems();
    displayBag();
}
function displayBag(){
    let containerElement=document.querySelector('.bag-item-container');
    let htm='';
    bagItemObj.forEach(bagItem => {
        htm+=generateItemHtml(bagItem);
    });
    containerElement.innerHTML=htm;
}
function loadBagItems(){
    bagItemObj=bagItems.map(itemId=>{
        const item=items.find(item=>item.id==itemId);
        if(item){
            return item;
        }
        return null;
    })
}
function generateItemHtml(item){
    return `<div class="item-left-part">
              <img class="bag-item-img" src="../${item.item_image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company_name}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.price.current_price}</span>
                <span class="original-price">${item.price.original_price}</span>
                <span class="discount-percentage">(${item.price.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>`
}
