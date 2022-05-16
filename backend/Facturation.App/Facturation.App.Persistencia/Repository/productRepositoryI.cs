using System.Collections.Generic;
using Facturation.App.Dominio.Models;

namespace Facturation.App.Persistencia.Repository
{
    public interface productRepositoryI
    {
        IEnumerable<Product> GetAllProducts();
        Product GetProduct(int idProduct);
        Product AddProduct(Product product);
        Product UpdateProduct(Product product);
        void DeleteProduct(int idProduct);
    }
}