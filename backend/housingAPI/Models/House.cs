using System;
using System.Collections.Generic;

namespace housingAPI.Models
{
    public partial class House
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? City { get; set; }
        public int Rooms { get; set; }
        public decimal Price { get; set; }
        public byte[]? Image { get; set; }
    }
}
