const slugify = require('slugify');
const Category = require('../models/category');




function createCategories(categories, parentid = null){

    const categoryList = [];
    let category;
    if(parentid == null){
        category = categories.filter(cat => cat.parentid == undefined);
    }else{
        category = categories.filter(cat => cat.parentid == parentid);
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentid,
            type: cate.type,
            children: createCategories(categories, cate._id)
        });
    }

    return categoryList;

};





exports.addcatagory=(req, res)=>{

    const categoryobj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.file){
        categoryobj.categoryImage = process.env.API + '/public/' + req.file.filename;
    }
     if(req.body.parentid){
         categoryobj.parentid= req.body.parentid;
     }
     const cat = new  Category(categoryobj);
     cat.save((error, Category)=>{
         if(error){
             return res.status(400).json({
                 error
             })
         };
         if(Category){
             return res.status(201).json({Category})
         };
     })
    }

    exports.getcategories=(req, res)=>{
        Category.find({})
        .exec((error,categories) =>{
        if(error){
            return res.status(400).json({error});
        };
        if(categories){
            const category = createCategories(categories);
            res.status(200).json({ category });
        };
    });
}