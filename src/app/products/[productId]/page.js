
const DynamicProduct = async ({ params, searchParams }) => {
    const productId = await params.productId;
    console.log(await searchParams)
   
    return (
        <>
          <h1 className='text-4xl+'>this is  DynamicProduct {productId} </h1>  
        </>
    );
};

export default DynamicProduct;