using System.ComponentModel.DataAnnotations;

namespace AuthServerIdentity.Dto
{
    public class LoginInputDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public bool RememberLogin { get; set; }
        public string ReturnUrl { get; set; }
    }
}
