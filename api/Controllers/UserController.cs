using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models.DTO;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _data;
        public UserController(UserService dataFromService)
        {
            _data = dataFromService;
        }

        //add a user
        [HttpPost]
        public bool AddUser(CreateAccountDTO UserToAdd)
        {
            return _data.AddUser(UserToAdd);
        }

        //login
        //update user account
        //delete user account

        
    }
}