import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
// import config from '../config';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: 'dfdfxl2ek',
    api_key:'662731798532381',
    api_secret:'X83x1-CeFB4Cq7RK4XUr1u1MlRM', 
});



export const sendImageToCloudinary = (imageName:string,path) =>{
    // Configuration

    return new Promise((resolve,reject) =>{
        cloudinary.uploader.upload(
            path, 
            {public_id: imageName},
            function(error, result) {
                if(error) {
                    reject(error);
                }
                resolve(result);
                       // delete a file asynchronously
        fs.unlink(path, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('File is deleted.');
          }
        });
       
            });
  
            })
}



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.cwd() + '/uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });
  
  export const upload = multer({ storage: storage })