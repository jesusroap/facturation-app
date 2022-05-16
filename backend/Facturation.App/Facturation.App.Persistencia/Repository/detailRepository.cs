using System;
using System.Collections.Generic;
using System.Linq;
using Facturation.App.Dominio.Models;
using Microsoft.EntityFrameworkCore;

namespace Facturation.App.Persistencia.Repository
{
    public class detailRepository : detailRepositoryI
    {
        private readonly facturationContext _appContext;

        /// <summary>
        /// <param name="_appContext"></param>
        /// </summary>

        public detailRepository(facturationContext appContext)
        {
            _appContext = appContext;
        }

        public IEnumerable<Detail> GetAllDetails()
        {
            return _appContext.Details.Include(p => p.Invoice.Customer).Include(p => p.Product.Details).ToList();
        }
    }
}