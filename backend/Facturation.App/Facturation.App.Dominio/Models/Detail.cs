using System;
using System.Collections.Generic;

#nullable disable

namespace Facturation.App.Dominio.Models
{
    public partial class Detail
    {
        public int DetailId { get; set; }
        public int? InvoiceId { get; set; }
        public int? ProductId { get; set; }
        public int? Amount { get; set; }
        public decimal? Price { get; set; }

        public virtual Invoice Invoice { get; set; }
        public virtual Product Product { get; set; }
    }
}
