using System;
using System.Collections.Generic;

namespace housingAPI.Models
{
    public partial class Users
    {
        public long Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
