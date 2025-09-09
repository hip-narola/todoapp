// Query.cs - Updated to handle string IDs
using HotChocolate;
using HotChocolate.Data;
using ToDoApp.Common.Dto;
using ToDoApp.Data;
using Task = ToDoApp.Data.Models.Task;

namespace ToDoApp.GraphQL
{
    public class Query
    {
        [GraphQLName("getAllTasks")]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public List<TaskDto> GetAllTasks([Service] ToDoAppDbContext context)
        {
            return context.Tasks.OrderByDescending(t => t.CreatedAt)
                                .Select(x => new TaskDto()
                                {
                                    Id = x.Id.ToString(),
                                    Description = x.Description,
                                    Status = x.Status,
                                    CreatedAt = x.CreatedAt,
                                    Title = x.Title,
                                    UpdatedAt = x.UpdatedAt
                                })
                                .ToList();
        }

        [GraphQLName("getTaskById")]
        public async Task<Task?> GetTaskById([Service] ToDoAppDbContext context, string id)
        {
            // Convert string ID back to int for database lookup
            if (int.TryParse(id, out int intId))
            {
                return await context.Tasks.FindAsync(intId);
            }
            return null;
        }
    }
}