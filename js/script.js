const memory8Gb = document.getElementById('memory-8gb')
const memory16Gb = document.getElementById('memory-16gb');
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const applyPromoCode  = document.getElementById('apply-promo-code');
const freeDelivery = document.getElementById('free-delivery');
const deliveryWithCharge = document.getElementById('delivery-with-charge');
const promoCodeInput = document.getElementById('promo-code');
const promoCodeApplyBtn = document.getElementById('apply-promo-code');
const totalPrice = document.getElementById('total-price');
const totalCostAfterPromoCode = document.getElementById('total-cost');


function updateCost(product, cost){
    const selectProduct = document.getElementById(product + '-cost');
    selectProduct.innerText = cost;
    calculateTotal();
}

//Calculate total price
function calculateTotal(){
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const total = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost) +1299;
    totalPrice.innerText = total;
    totalCostAfterPromoCode.innerText = total;
}

memory8Gb.addEventListener('click',function(){
    updateCost('memory',0)
});
memory16Gb.addEventListener('click', function(){
    updateCost('memory',180);
});

storage256Gb.addEventListener('click',function(){
    updateCost('storage',0);
});
storage512Gb.addEventListener('click',function(){
    updateCost('storage',100);
});
storage1Tb.addEventListener('click',function(){
    updateCost('storage',180);
});

freeDelivery.addEventListener('click',function(){
    updateCost('delivery',0);
});
deliveryWithCharge.addEventListener('click',function(){
    updateCost('delivery',20);
});

// Match Promo Code and Update Total Cost

promoCodeApplyBtn.addEventListener('click', function(){
    const promoCode = promoCodeInput.value;
    if(promoCode.toLowerCase() == 'stevekaku'){
        const discountAmount = parseInt(totalCostAfterPromoCode.innerText) * 0.20;
        totalCostAfterPromoCode.innerText = parseFloat(totalCostAfterPromoCode.innerText) - discountAmount;
    }
    else{
        alert('Please Provide Valid Promo Code');
    }
    promoCodeInput.value = '';
});