using Microsoft.EntityFrameworkCore;
using Task = ToDoApp.Data.Models.Task;
using TaskStatus = ToDoApp.Common.TaskStatus;

namespace ToDoApp.Data
{
    public class ToDoAppDbContext : DbContext
    {
        public ToDoAppDbContext(DbContextOptions<ToDoAppDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Task>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Description).HasMaxLength(1000);
                entity.Property(e => e.Status).HasDefaultValue(TaskStatus.Pending); ;
            });

            base.OnModelCreating(modelBuilder);
        }
        
    }
}
