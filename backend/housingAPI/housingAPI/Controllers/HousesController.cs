using housingAPI.Data;
using housingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace housingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HousesController : ControllerBase
    {

        private readonly DataContext _context;

        public HousesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Houses>>> Get()
        {
            return Ok(await _context.Houses.ToListAsync());
        }



    }
}
