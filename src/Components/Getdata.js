import fire from "@/config/config";


export default async function Getdata(value={}) {
    console.log(value.type);
    let data = await fire.firestore().collection('blog').limit(value ? value.limit : undefined).where("posttitle" , ">=" , value.query ? value.query : '').where("selectcategory" , "==" , value.type ? value.type : '').get()
    
    const blogs = data.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
    return blogs;
}


// .where("selectcategory" , "==" , any)