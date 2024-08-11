

const ProductCatagories = () => {
  return (
    <section className="mt-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center pt-3 mb-10">Categories</h2>
      <div className="grid grid-cols-1 mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
          <div style={{backgroundImage: 'url(https://adventureshop.mt/cdn/shop/files/2024_ClassicAir_Orange_High24-large.jpg?v=1719220981&width=1750)', backgroundSize: "cover", backgroundPosition: "center"}} className="bg-white h-96 p-4 shadow-md text-center object-cover">
            <h3 className="text-3xl text-start mt-72 text-white font-semibold">Camping</h3>
          </div>
          <div style={{backgroundImage: 'url(https://adventureshop.mt/cdn/shop/files/SS23-Rossignol-Online-Shop-banner-SHOES.png?v=1682516045&width=600)', backgroundSize: "cover", backgroundPosition: "center"}} className="bg-white h-96 p-4 shadow-md text-center object-cover">
            <h3 className="text-3xl text-start mt-72 text-white font-semibold">Footwear</h3>
          </div>
          <div style={{backgroundImage: 'url(https://adventureshop.mt/cdn/shop/files/1_BasileEtOscar_VillardDeLans_Rossignol_HD_LouisGarnier-15-3500x5247-8f7acbc3-f500-4068-8381-fdd7c9b5b195.png?v=1698678464&width=600)', backgroundSize: "cover", backgroundPosition: "center"}} className="bg-white p-4 h-96 shadow-md text-center object-cover">
            <h3 className="text-3xl text-start mt-72 text-white font-semibold drop-shadow-xl ease-in-out">Ski & Snowsports</h3>
          </div>
          <div style={{backgroundImage: 'url(https://adventureshop.mt/cdn/shop/files/LA_INDO_NEW6_TREK_e5e585b0-aaa2-4f9f-8744-0847cb7e597e.jpg?v=1718197658&width=600)', backgroundSize: "cover", backgroundPosition: "center"}} className="bg-white p-4 shadow-md text-center object-cover h-96">
            <h3 className="text-3xl text-start mt-72 text-white font-semibold">Backpacks</h3>
          </div>
       
      </div>
    </section>
  );
};

export default ProductCatagories;
