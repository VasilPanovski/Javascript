let productService = (() => {

    function getAllProducts() {
        return requester.get('appdata', 'products');
    }
    
    function getProduct(productId) {
        return requester.get('appdata', 'products/' + productId);
    }

    return {
        getAllProducts,
        getProduct
    }

})();
