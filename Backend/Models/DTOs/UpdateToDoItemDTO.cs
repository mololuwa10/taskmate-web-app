using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models.Task;

namespace Backend.Models.DTOs
{
	public class UpdateToDoItemDTO
	{
		public string? TaskName { get; set; }
		public string? TaskDescription { get; set; }
		public DateTime? DueDate { get; set; }
		public string? Priority { get; set; }
		public bool? IsCompleted { get; set; }
		public int CategoryId { get; set; }
		
		public ICollection<SubTasks>? Subtasks { get; set; }

		public Reccurence? Recurrence { get; set; }

		public ICollection<Attachment>? Attachments { get; set; }
	}
}