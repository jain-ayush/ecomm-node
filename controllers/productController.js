import instance from "../helpers/axiosInstance.js"

const productController = {

    getProduct: async (req, res) => {
        try {
            const response = await instance.get('https://dummyjson.com/products')
            res.status(200).send({'message':'Product List new','status':'success','data':response.data})
        } catch (error) {            
           res.status(401).send({'message':'Error','status':'failed','error':error}) 
        }        
    },

    getProductDetail: async (req, res) => {
        const {id} = req.params        
        try {
            const productDetail = await instance.get(`https://dummyjson.com/products/${id}`)
            res.status(200).send({'message':'Product Detail','status':'success','data':productDetail.data})
        } catch (error) {
            res.status(401).send({'message':'Error','status':'failed','error':error}) 
        }
    },

    getAllProductCategories: async (req, res) => {
        try {
            const productCategories = await instance.get('https://dummyjson.com/products/categories')
            res.status(200).send({'message':'Product All Categories','status':'success','data':productCategories.data})
        } catch (error) {
            res.status(401).send({'message':'Error','status':'failed','error':error}) 
        }
    },

    getproductsCategoryList: async (req, res) => {
        try {
            const productsCategoryList = await instance.get('https://dummyjson.com/products/category-list')
            res.status(200).send({'message':'Products Category','status':'success','data':productsCategoryList.data})
        } catch (error) {
            res.status(401).send({'message':'Error','status':'failed','error':error}) 
        }
    },

    searchProducts: async (req, res) => {
        const {search} = req.query
        
        try {
            const searchResults = await instance.get(`https://dummyjson.com/products/search?q=${search}`)
            res.status(200).send({'message':'Search Results','status':'success','data':searchResults.data})
        } catch (error) {            
            res.status(401).send({'message':'Error','status':'failed','error':error}) 
        }
    }
}


export default productController