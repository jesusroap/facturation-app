using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Facturation.App.Dominio.Models;
using Facturation.App.Persistencia.Repository;

namespace Facturation.App.Servicios.Controllers
{
    [ApiController]
    // [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static productRepositoryI _repoProducts = new productRepository(new Persistencia.Repository.facturationContext());          

        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [Route("api/[controller]")]
        [HttpGet]
        public IEnumerable<Product> GetAllProducts() {
            IEnumerable<Product> products = _repoProducts.GetAllProducts();
            return products;
        }

        [Route("api/[controller]/{idProduct}")]
        [HttpGet]
        public Product GetProduct(int idProduct) {
            Product product = _repoProducts.GetProduct(idProduct);
            return product;
        }

        [Route("api/[controller]")]
        [HttpPost]
        public void AddProduct(Product product) {
            _repoProducts.AddProduct(product);
        }

        [Route("api/[controller]")]
        [HttpPut]
        public void UpdateProduct(Product product) {
            _repoProducts.UpdateProduct(product);
        } 

        [Route("api/[controller]/{idProduct}")]
        [HttpDelete]
        public void DeleteProduct(int idProduct) {
            _repoProducts.DeleteProduct(idProduct);
        }
        
    }
}