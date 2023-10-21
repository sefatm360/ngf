const HandleCart = ({ quantity, singleProduct }: any) => {
  let nowCart = [];
  const nowStorage = JSON.parse(localStorage.getItem('cart') as string);
  if (nowStorage) {
    const found = nowStorage.find(
      (item: any) => item.product_id === singleProduct.product_id
    );
    const restItem = nowStorage.filter(
      (item: any) => item.product_id !== found?.product_id
    );
    if (found) {
      found.quantity = found.quantity + quantity;
      nowCart = [...restItem, found];
      return nowCart;
    } else {
      singleProduct.quantity = quantity;
      nowCart = [...nowStorage, singleProduct];
      return nowCart;
    }
  } else {
    singleProduct.quantity = quantity;
    nowCart.push(singleProduct);
    return nowCart;
  }
};

export default HandleCart;
