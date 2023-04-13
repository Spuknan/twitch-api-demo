import { productsService } from "../services/productsService.js";

const productsController = {
   // Traer todos los productos
   getAll: async (req, res) => {
      const allProducts = await productsService.getAll();
      console.log(allProducts);
      return res.status(200).json({
         status: 200,
         total: allProducts.length,
         data: allProducts
      });
   },

   // Traer solo un producto por su ID
   getOne: async (req, res) => {
      const { id } = req.params;
      const product = await productsService.getOne(id);
      return res.status(200).json({
         status: 200,
         data: product,
      })
   },

   // Crear un producto
   store: async (req, res) => {
      const newProduct = {
         name: "Test product",
         category: "cat test product",
         description: "desc test product",
         images: "img test product",
      }
      const productStored = await productsService.store(newProduct);
      return res.status(200).json({
         isStored: true,
         status: 200,
         data: productStored,
      })
   },

   // Borrar un producto por su ID
   delete: (req, res) => {
      return res.send(`Vamos a BORRAR el producto con el ID ${req.params.id}`);
   },

   // Actualizar un producto por su ID
   update: (req, res) => {
      return res.send(`Vamos a ACTUALIZAR el producto con el ID ${req.params.id}`);
   }
}

export default productsController;