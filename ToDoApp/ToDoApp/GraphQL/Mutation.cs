
using ToDoApp.Common.Dto;
using ToDoApp.Data;
using Task = ToDoApp.Data.Models.Task;
using TaskStatus = ToDoApp.Common.TaskStatus;

namespace ToDoApp.GraphQL
{
    public class Mutation
    {
        public async Task<TaskDto> createTask([Service] ToDoAppDbContext context, CreateTaskInput input)
        {
            var task = new Task
            {
                Title = input.Title,
                Description = input.Description ?? string.Empty,
                Status = TaskStatus.Pending,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            context.Tasks.Add(task);
            await context.SaveChangesAsync();

            var dto = new TaskDto
            {
                Id = task.Id.ToString(),
                Description = task.Description,
                Status = task.Status,
                CreatedAt = task.CreatedAt,
                Title = task.Title,
                UpdatedAt = task.UpdatedAt
            };
            return dto;
        }

        public async Task<TaskDto?> updateTaskStatus([Service] ToDoAppDbContext context, int id, TaskStatus status)
        {
            var task = await context.Tasks.FindAsync(id);
            if (task == null)
            {
                throw new GraphQLException("Task not found");
            }

            task.Status = status;
            task.UpdatedAt = DateTime.UtcNow;

            await context.SaveChangesAsync();


            var dto = new TaskDto
            {
                Id = task.Id.ToString(),
                Description = task.Description,
                Status = task.Status,
                CreatedAt = task.CreatedAt,
                Title = task.Title,
                UpdatedAt = task.UpdatedAt
            };
            return dto;
        }

    }

    public record CreateTaskInput(string Title, string? Description);
}

