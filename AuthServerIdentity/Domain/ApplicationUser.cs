using Microsoft.AspNetCore.Identity;

namespace AuthServerIdentity.Domain
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
    }
}
