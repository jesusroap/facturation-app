using System;
using System.Collections.Generic;
using System.Linq;
using Facturation.App.Dominio.Models;
using Microsoft.EntityFrameworkCore;

namespace Facturation.App.Persistencia.Repository
{
    public class productRepository : productRepositoryI
    {
        private readonly facturationContext _appContext;

        /// <summary>
        /// <param name="_appContext"></param>
        /// </summary>

        public productRepository(facturationContext appContext)
        {
            _appContext = appContext;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _appContext.Products.Include(p => p.Details).ToList();
        }

        public Product GetProduct(int idProduct)
        {
            return _appContext.Products.FirstOrDefault(p => p.ProductId == idProduct);
        }
        
        public Product AddProduct(Product product)
        {
            var productoAdicionado = _appContext.Products.Add(product);
            _appContext.SaveChanges();
            return productoAdicionado.Entity;
        }

        public Product UpdateProduct(Product product)
        {
            var productoEncontrado = _appContext.Products.FirstOrDefault(p => p.ProductId == product.ProductId);

            if (productoEncontrado != null)
            {
                productoEncontrado.ProductName = product.ProductName;
                productoEncontrado.Price = product.Price;
                productoEncontrado.Stock = product.Stock;

                _appContext.SaveChanges();
            }

            return productoEncontrado;
        }

        public void DeleteProduct(int idProduct)
        {
            var productoEncontrado = _appContext.Products.FirstOrDefault(p => p.ProductId == idProduct);

            if (productoEncontrado == null)
                return;
            _appContext.Products.Remove(productoEncontrado);
            _appContext.SaveChanges();
        }
    }
}