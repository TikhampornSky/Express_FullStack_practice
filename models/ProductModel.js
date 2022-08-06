//import connection
import db from "../config/database.js"

//get all products
export const getProducts = (result) => {                    //result is the parameter
    db.query("SELECT * FROM product ORDER BY `product_name` ASC", (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)                               
        } else {
            result(null,results)
        }
    })
}

//get single product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE product_id = ?", [id],(err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null,results[0])
        }
    })
}

//insert product to database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            console.log("ok Insert")
            result(null, results)
        }
    })
}

// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query(
      "UPDATE product SET product_name = ?, product_price = ?, product_detail = ? WHERE product_id = ?",
        [data.product_name, data.product_price, data.product_detail, id],
        (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
        }
    )
  };
  
  // Delete Product to Database
  export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
  }