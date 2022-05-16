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
    public class CustomerController : ControllerBase
    {
        private static customerRepositoryI _repoCustomers = new customerRepository(new Persistencia.Repository.facturationContext());

        [Route("api/[controller]")]
        [HttpGet]
        public IEnumerable<Customer> GetAllCustomers() {
            IEnumerable<Customer> customers = _repoCustomers.GetAllCustomers();
            return customers;
        }  
    }
}