using System.Collections.Generic;
using Facturation.App.Dominio.Models;

namespace Facturation.App.Persistencia.Repository
{
    public interface customerRepositoryI
    {
        IEnumerable<Customer> GetAllCustomers();
    }
}