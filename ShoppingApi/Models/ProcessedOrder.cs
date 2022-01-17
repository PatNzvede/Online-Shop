using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingApi.Models
{
    public class ProcessedOrder
    {
        public int Id { get; set; }

        public string Customer { get; set; }
        public string OrderId { get; set; }
        public decimal GrandTotal { get; set; }
        public Boolean Processed { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
