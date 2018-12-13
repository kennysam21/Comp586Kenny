using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models.Entities
{
  public class Posts
  {
        public int Id { get; set; }
        [Required]
        public DateTimeOffset Date { get; set; }
        public string Post { get; set; }
    }
}
