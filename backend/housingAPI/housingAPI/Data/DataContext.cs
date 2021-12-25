using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using housingAPI.Models;

namespace housingAPI.Data
{
    public partial class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Houses> Houses { get; set; } = null!;
        public virtual DbSet<Users> Users { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Houses>(entity =>
            {
                entity.ToTable("HOUSES");

                entity.HasIndex(e => e.Id, "IX_HOUSES_Id")
                    .IsUnique();

                entity.Property(e => e.Price).HasColumnType("NUMERIC");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("USERS");

                entity.HasIndex(e => e.Id, "IX_USERS_Id")
                    .IsUnique();

                entity.HasIndex(e => e.UserName, "IX_USERS_UserName")
                    .IsUnique();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
