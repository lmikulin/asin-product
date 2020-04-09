import Dexie from 'dexie';

const tableName = 'PRODUCTS_DB';

export const getDatabase = () => {
  const db = new Dexie(tableName);
  db.version(1).stores({
    products: 'asin, title, categories, bestsellers_rank, main_image, dimensions'
  });
  return db;
}

export const saveProduct = (db, product) => {
  db.products.put(product)
    .then(item => console.log('stored item', item))
    .catch(error => console.log('could not sore item', error));
}

export const getProduct = (db, asin, success, failure) => {
  db.products.get(asin)
    .then(data => success(db, asin, data))
    .catch(error => failure(db, asin, error));
}
