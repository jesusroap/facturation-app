using System;
using System.Collections.Generic;

#nullable disable

namespace Facturation.App.Dominio.Models
{
    public partial class Invoice
    {
        public Invoice()
        {
            Details = new HashSet<Detail>();
        }

        public int InvoiceId { get; set; }
        public int? CustomerId { get; set; }
        public DateTime? Date { get; set; }

        public virtual Customer Customer { get; set; }
        public virtual ICollection<Detail> Details { get; set; }
    }
}
