using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Services.Context;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;

namespace api.Services;

public class BlogItemService : ControllerBase
{
    private readonly DataContext _context;

    public BlogItemService(DataContext context)
    {
        _context = context;
    }
    public bool AddBlogItems(BlogItemModel newBlogItem)
    {
        bool result = false;
        _context.Add(newBlogItem);
        result = _context.SaveChanges() !=0;
        return result;
    }

    // public bool DeleteBlogItems(BlogItemModel blogDelete)
    // {
        
    // }

    // public IEnumerable<BlogItemModel> GetBlogItems()
    // {
        
    // }

   public IEnumerable<BlogItemModel> GetItemByCategory(string category)
    {
        return _context.BlogInfo.Where(item => item.Category == category);
    }

    internal IEnumerable<BlogItemModel> GetItemByDate(string date)
    {
        throw new NotImplementedException();
    }

    //    public IEnumerable<BlogItemModel> GetItemByDate(string date)
    //     {

    //     }

    // public List<BlogItemModel> GetItemByTag(string tag)
    // {
    //     List<BlogItemModel> AllBlogWithTag = new List<BlogItemModel>();
    //     var allItems = GetAllBlogItems().ToList();
    //     for(int i = 0; i < allItems.Count; i++)
    //     {
    //         BlogItemModel Item = allItems[i];
    //         var itemArr = ItemsFeature.Tag.Split(',')
    //     }
    // }

    internal bool UpdateBlogItems(BlogItemModel blogUpdate)
    {
        throw new NotImplementedException();
    }
}
