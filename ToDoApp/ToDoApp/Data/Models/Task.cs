using System.ComponentModel.DataAnnotations;
using TaskStatus = ToDoApp.Common.TaskStatus;

namespace ToDoApp.Data.Models
{
    public class Task
    {
        [Key]
        //[GraphQLIgnore] // Hide the int ID from GraphQL
        public int Id { get; set; }

        //[GraphQLName("id")] // Expose string ID to GraphQL
        //public string GraphQLId => Id.ToString();

 
        public string Title { get; set; } = string.Empty;


        public string Description { get; set; } = string.Empty;

        public TaskStatus Status { get; set; } = TaskStatus.Pending;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }

}
