import fire from "@/config/config";


export default async function Getdata(value={}) {
    let data = await fire.firestore().collection('blog').limit(value ? value.limit : undefined).get()
    
    const blogs = data.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
 console.log(value.category);
  const Alldata = blogs.filter((blogs)=>{
    if (value.query === undefined && value.category === undefined) {
        return blogs;
      } else {
        if (value.query && value.category) {
           if(blogs.selectcategory === value.category && blogs.posttitle.toLowerCase().includes(value.query.toLowerCase())){
            return blogs
           }
        }
        else{
            if(value.category && blogs.selectcategory === value.category){
                       return blogs
               }
               else if(value.query && blogs.posttitle.toLowerCase().includes(value.query.toLowerCase())){
                return blogs;
               }
        }
      }
    })
    console.log(Alldata);
    return Alldata;
}


// .where("selectcategory" , "==" , any)