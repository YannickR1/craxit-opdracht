using HousingAPI.Models;

namespace HousingAPI.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);

    }
}
