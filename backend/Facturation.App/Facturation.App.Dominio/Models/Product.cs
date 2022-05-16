using System;
using System.Collections.Generic;

#nullable disable

namespace Facturation.App.Dominio.Models
{
    public partial class Product
    {
        public Product()
        {
            Details = new HashSet<Detail>();
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? Price { get; set; }
        public int? Stock { get; set; }

        public virtual ICollection<Detail> Details { get; set; }
    }
}
