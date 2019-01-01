let listing = document.getElementById('icon-listing');
let tiles = document.getElementById('icon-tiles');
let productsPage = document.getElementById('products-page');
let productListing = document.getElementsByClassName('product-listing');
let productTiles = document.getElementsByClassName('product-tiles');
let productPicturesListing = document.getElementsByClassName('product-tiles__pictures');
let productPicturesTiles = document.getElementsByClassName('product-listing__pictures');

//меняет класс у продукта
function changeClassProductListing() {
        while(productTiles.length>0)
            productTiles[0].className = 'product-listing';
        while(productPicturesListing.length>0)
            productPicturesListing[0].className = 'product-listing__pictures';
    }

function changeClassProductTiles() {
        while(productListing.length>0)
            productListing[0].className = 'product-tiles';
        while(productPicturesTiles.length>0)
            productPicturesTiles[0].className = 'product-tiles__pictures';

    }
//меняет класс на listing у всех эементов 
function changeClassListing(){
    listing.classList.add('icons-active');
    tiles.classList.remove('icons-active');
    productsPage.className = 'products-listing';
    changeClassProductListing();
    
}
//меняет класс на tiles у всех эементов 
function changeClassTiles(){
    tiles.classList.add('icons-active');
    listing.classList.remove('icons-active');
    productsPage.className = 'products-tiles';
    changeClassProductTiles();
}




//по клику на иконку смены с списка на плитку меняет класс и слушает клик
window.onload = function(){
    document.getElementById('icon-listing').addEventListener('click',  changeClassListing);
    document.getElementById('icon-tiles').addEventListener('click', changeClassTiles);
}




//по клику добавить класс фона на этот блок и удалить с другого
//заменить на этом блоке картинку