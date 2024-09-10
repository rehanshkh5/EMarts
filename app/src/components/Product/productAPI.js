export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchFeatured() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/featured");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://e-bazaar-sage.vercel.app/products/` + id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort, paginationObj) {
  let queryStr = "";

  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const finalCategoryValue = categoryValues[categoryValues.length - 1];
      queryStr += `${key}=${finalCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryStr += `${key}=${sort[key]}&`;
  }

  for (let key in paginationObj) {
    queryStr += `${key}=${paginationObj[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(`https://e-bazaar-sage.vercel.app/products?` + queryStr);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");

    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/brands");
    const data = await response.json();
    resolve({ data });
  });
}

// api 