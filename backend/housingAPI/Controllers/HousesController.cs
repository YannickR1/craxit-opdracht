using HousingAPI.Data;
using HousingAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Web.Http.Cors;

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

        [EnableCors("MyCorsImplementationPolicy", "*", "*")]
        [HttpGet]
        public async Task<ActionResult<List<House>>> Get()
        {
            return Ok(await _context.Houses.ToListAsync());
        }

        [EnableCors("MyCorsImplementationPolicy", "*", "*")]
        [HttpGet("{id}")]
        public async Task<ActionResult<House>> Get(int id)

        {
            var house = await _context.Houses.FindAsync(id);
            if (house == null)
                return BadRequest("House not found");
            return Ok(house);
        }

        [EnableCors("MyCorsImplementationPolicy", "*", "*")]
        [HttpPost]
        public async Task<ActionResult<List<House>>> AddHouse(House house)

        {
            _context.Houses.Add(house);
            await _context.SaveChangesAsync();

            return Ok(await _context.Houses.ToListAsync());
        }

        [EnableCors("MyCorsImplementationPolicy", "*", "*")]
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

        [EnableCors("MyCorsImplementationPolicy", "*", "*")]
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
