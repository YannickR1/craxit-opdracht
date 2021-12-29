
using HousingAPI.Data;
using HousingAPI.DTO;
using HousingAPI.Interfaces;
using HousingAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http.Cors;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly HousingContext _context;
    private readonly ITokenService _tokenService;

    public UserController(HousingContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;

    }

    [EnableCors("MyCorsImplementationPolicy", "*", "*")]
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await UserExists(registerDto.Username)) return BadRequest("Username already in use");
        var hmac = new HMACSHA512();

        var user = new User
        {
            Username = registerDto.Username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key,

        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new UserDto
        {
            Username = user.Username,
            Token = _tokenService.CreateToken(user)

        };
    }

    private async Task<bool> UserExists(string username)
    {
        return await _context.Users.AnyAsync(x => x.Username == username.ToLower());
    }

    [EnableCors("MyCorsImplementationPolicy", "*", "*")]
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _context.Users
            .SingleOrDefaultAsync(x => x.Username.ToLower() == loginDto.Username.ToLower());

        if (user == null) return Unauthorized("Invalid username");

        var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
        }

        return new UserDto
        {
            Username = user.Username,
            Token = _tokenService.CreateToken(user)

        };
    }

}