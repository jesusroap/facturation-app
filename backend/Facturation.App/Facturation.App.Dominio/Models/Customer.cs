using System;
using System.Collections.Generic;

#nullable disable

namespace Facturation.App.Dominio.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Invoices = new HashSet<Invoice>();
        }

        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public DateTime? BirthDate { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}
