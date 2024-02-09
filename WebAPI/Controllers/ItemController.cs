using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        private static readonly List<Item> items = new List<Item>
        {
            new Item { Id = 1, Name = "Dubai" },
            new Item { Id = 2, Name = "Abu Dhabi" }
        };

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return items;
        }
        [HttpPost]
        public IActionResult Post(Item item)
        {
            if (item == null)
            {
                return BadRequest("Item is null.");
            }

            var newId = items.Any() ? items.Max(x => x.Id) + 1 : 1;
            item.Id = newId;

            items.Add(item);

            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }
    }
}
