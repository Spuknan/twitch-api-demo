import PRODUCT from '../models/productsModel.js';

export const productsService = {
   getAll: () => {
      try {
         return PRODUCT.find({ deletedAt: null });
      } catch (error) {
         return error;
      }
   },

   getOne: (id) => {
      try {
         return PRODUCT.find({ _id: id});
      } catch (error) {
         return error;
      }
   },

   store: (newProduct) => {
      try {
         return PRODUCT.create(newProduct);
      } catch (error) {
         return error
      }
   }
}