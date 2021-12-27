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

        private readonly HousingContext _context;

        public HousesController(HousingContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<House>>> Get()
        {
            return Ok(await _context.Houses.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<House>> Get(int id)

        {
            var house = await _context.Houses.FindAsync(id);
            if (house == null)
                return BadRequest("House not found");
            return Ok(house);
        }

        [HttpPost]
        public async Task<ActionResult<List<House>>> AddHouse(House house)

        {
            _context.Houses.Add(house);
            await _context.SaveChangesAsync();

            return Ok(await _context.Houses.ToListAsync());
        }

        [HttpPut]

        public async Task<ActionResult<List<House>>> UpdateHero(House request)

        {
            var dbHouse = await _context.Houses.FindAsync(request.Id);
            if (dbHouse == null)
                return BadRequest("House not found");

            dbHouse.Name = request.Name;
            dbHouse.City = request.City;
            dbHouse.Rooms = request.Rooms;
            dbHouse.Price = request.Price;

            await _context.SaveChangesAsync();

            return Ok(await _context.Houses.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<House>>> Delete(int id)

        {
            var dbHouse = await _context.Houses.FindAsync(id);
            if (dbHouse == null)
                return BadRequest("House not found");

            _context.Houses.Remove(dbHouse);
            await _context.SaveChangesAsync();

            return Ok(await _context.Houses.ToListAsync());
        }



    }
}
