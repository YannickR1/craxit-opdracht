using System;
using System.Collections.Generic;

namespace housingAPI.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
