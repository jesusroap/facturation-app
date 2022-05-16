using System;
using System.Collections.Generic;
using System.Linq;
using Facturation.App.Dominio.Models;
using Microsoft.EntityFrameworkCore;

namespace Facturation.App.Persistencia.Repository
{
    public class customerRepository : customerRepositoryI
    {
        private readonly facturationContext _appContext;

        /// <summary>
        /// <param name="_appContext"></param>
        /// </summary>

        public customerRepository(facturationContext appContext)
        {
            _appContext = appContext;
        }

        public IEnumerable<Customer> GetAllCustomers()
        {
            return _appContext.Customers.Include(p => p.Invoices).ToList();
        }
    }
}