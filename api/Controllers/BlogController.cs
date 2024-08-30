using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly BlogItemService _data;
        public BlogController(BlogItemService dataFromService)
        {
            _data = dataFromService;
        }

        [HttpPost("AddBlogItems")]
        public bool AddBlogItems(BlogItemModel newBlogItem)
        {
            return _data.AddBlogItems(newBlogItem);
        }


        // //GetAllBlogItems
        [HttpGet("GetBlogItem")]

        public IEnumerable<BlogItemModel> GetBlogItems()
        {
            return _data.GetBlogItems();
        }

        //GetBlogItemsByCategory
        [HttpGet("GetBlogItemByCategory/{Category}")]

        public IEnumerable<BlogItemModel> GetItemByCategory(string Category)
        {
            return _data.GetItemByCategory(Category);
        }

        //GetItemsByTAg
        [HttpGet("GetItemsByTag/{Tag}")]
        public List<BlogItemModel> GetItemByTag(string Tag)
        {
            return _data.GetItemByTag(Tag);
        }

        //GetBlogItemsByDate
        [HttpGet("GetItemsByDate/{Date}")]
        public IEnumerable<BlogItemModel> GetItemsByDate(string Date)
        {
            return _data.GetItemByDate(Date);
        }

        //UpdateBlogItems
        [HttpPost("UpdateBlogItems")]

        public bool UpdateBlogItems(BlogItemModel BlogUpdate)
        {
            return _data.UpdateBlogItems(BlogUpdate);
        }

        //DeleteBlogItems
        [HttpPost("DeleteblogItem/{BlogItemToDelete}")]
        public bool DeleteBlogItems(BlogItemModel BlogDelete)
        {
            return _data.DeleteBlogItems(BlogDelete);
        }

        //WE need a GetItemsByUserId 
    [HttpGet("GetItemsByUserId/{UserId}")]

    public IEnumerable<BlogItemModel> GetItemsByUserId (int UserId)
    {
        return _data.GetItemsByUserId(UserId);
    }
    }
}