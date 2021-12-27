using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using housingAPI.Models;

namespace housingAPI.Data
{
    public partial class HousingContext : DbContext
    {
        public HousingContext()
        {
        }

        public HousingContext(DbContextOptions<HousingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<House> Houses { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Usersdto> Usersdtos { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<House>(entity =>
            {
                entity.ToTable("HOUSES");

                entity.HasIndex(e => e.Id, "IX_HOUSES_Id")
                    .IsUnique();

                entity.Property(e => e.Price).HasColumnType("NUMERIC");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USERS");

                entity.HasIndex(e => e.Id, "IX_USERS_Id")
                    .IsUnique();

                entity.HasIndex(e => e.Username, "IX_USERS_Username")
                    .IsUnique();
            });

            modelBuilder.Entity<Usersdto>(entity =>
            {
                entity.HasKey(e => e.Username);

                entity.ToTable("USERSDTO");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
