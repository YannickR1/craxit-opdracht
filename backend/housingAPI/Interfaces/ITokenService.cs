using HousingAPI.Models;

public interface ITokenService
{
    string CreateToken(User user);
}