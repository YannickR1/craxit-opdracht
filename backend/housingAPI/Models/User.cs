using System;
using System.Collections.Generic;

namespace housingAPI.Models
{
    public partial class User
    {
        public long Id { get; set; }
        public string Username { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;
    }
}
