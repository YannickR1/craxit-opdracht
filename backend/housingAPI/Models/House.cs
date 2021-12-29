using System;
using System.Collections.Generic;

namespace HousingAPI.Models
{
    public partial class House
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? City { get; set; }
        public long? Rooms { get; set; }
        public decimal Price { get; set; }
        public byte[]? Image { get; set; }
    }
}
