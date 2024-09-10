
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchCartItemsById() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/cart");
    const data = await response.json();
    resolve({ data });
  });
}

export function UpdateToCart(updateItem) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "https://e-bazaar-sage.vercel.app/cart/" + updateItem.id,
      {
        method: "PATCH",
        body: JSON.stringify(updateItem),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function deletCartItem(itemid) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/cart/" + itemid, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemid } });
  });
}

export async function clearCart(userId) {
  return new Promise(async (resolve) => {
    const res = await fetchCartItemsById(userId);
    const items = res.data;

    for (let item of items) {
      await deletCartItem(item.id);
    }
    resolve({ status: "success" });
  });
}
