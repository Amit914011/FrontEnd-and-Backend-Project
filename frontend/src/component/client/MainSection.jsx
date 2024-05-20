import React, { useContext, useEffect, useState } from "react";
import { Navigation, Newspaper} from "lucide-react";
import axios from "axios";
import UserContext from "../../context/Usercontext";

export default function MainSection() {
  let [data, setData] = useState([]);
  let {setCartList}=useContext(UserContext)
  async function getData() {
    let result = await axios.get("http://localhost:3000/api/getData");
    setData(result.data);
  }
  useEffect(() => {
    getData();
    getCartData();
    
  }, []);

  async function getCartData(){
    let result= await axios.get("http://localhost:3000/api/cartGetData");
    setCartList(result.data.length)
    getData()
  }

  let {login}= useContext(UserContext)
  async function addToCart(data){
    if(login){
      await axios.post('http://localhost:3000/api/cartSaveData',{
        productName:data.productName,
        productType:data.productType,
        productPrice:data.productPrice,
        productRating:data.productRating,
        image:data.image,
    },{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    alert('Item Save into Cart')
    getCartData()
  }else{
    Navigation('/signin')
  }
}


  // let [searchData, setSearchData] = useState({
  //   search: "",
  // });
  // let { search } = searchData;

  // function dataSeach(e) {
  //   setSearchData({ ...search, [e.target.value]: e.target.name });

  //   console.log(searchData);
  // }

  let [searchData,setSearchData] = useState('')
    async function handleChange() {
      let result = await axios(
        `http://localhost:3000/api/searchProduct/${searchData}`
      );
      setData(result.data);
    }

    async function allData() {
      let result = await axios.get("http://localhost:3000/api/getData");
      setData(result.data);
    }
    async function oneToTwo() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productPrice >= 10000 && data.productPrice <= 20000
      );
      setData(final);
    }
    async function twoToFour() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productPrice >= 20000 && data.productPrice <= 40000
      );
      setData(final);
    }
    async function fourToMore() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productPrice >= 40000
      );
      setData(final);
    }
    async function one() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) =>
          data.productRating >= 1 &&
          data.productRating < 2 &&
          data.productPrice >= 10000 &&
          data.productPrice <= 20000
      );
      setData(final);
    }
    async function two() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productRating >= 2 && data.productRating < 3
      );
      setData(final);
    }
    async function three() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productRating >= 3 && data.productRating < 4
      );
      setData(final);
    }
    async function four() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter(
        (data) => data.productRating >= 4 && data.productRating < 5
      );
      setData(final);
    }
    async function five() {
      let result = await axios.get("http://localhost:3000/api/getData");
      let final = await result.data.filter((data) => data.productRating >= 5);
      setData(final);
    }

    return (
      <>
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-12 fixed">
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <nav className="-mx-3 space-y-6 ">
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  analytics
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed bg-white"
                  type="search"
                  placeholder="Search  here Product"
                  id="name"
                  name="search"
                  onChange={(e)=>setSearchData(e.target.value)}
                ></input>
                <button
                  className="bg-green-600 px-4 py-1 text-xl text-white font-bold rounded hover:bg-green-700"
                  onClick={handleChange}
                >
                  Search
                </button>
              </div>
              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Product Price
                </label>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={allData}
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">All</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={oneToTwo}
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">10k - 20k</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={twoToFour}
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">20k - 40k</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={fourToMore}
                >
                  <Newspaper className="h-5 w-5" aria-hidden="true" />
                  <span className="mx-2 text-sm font-medium">40k - More</span>
                </button>
              </div>

              <div className="space-y-3 ">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Product Rating
                </label>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={one}
                >
                  <span className="mx-2 text-sm font-medium">⭐</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={two}
                >
                  <span className="mx-2 text-sm font-medium">⭐⭐</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={three}
                >
                  <span className="mx-2 text-sm font-medium">⭐⭐⭐</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={four}
                >
                  <span className="mx-2 text-sm font-medium">⭐⭐⭐⭐</span>
                </button>
                <button
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={five}
                >
                  <span className="mx-2 text-sm font-medium">⭐⭐⭐⭐⭐</span>
                </button>
              </div>
            </nav>
          </div>
        </aside>
        <div className="w-[78%] flex flex-wrap relative left-64 top-20 justify-evenly">
          {data.map((data) => (
            <div className="w-[300px] rounded-md border ">
              <img
                src={`http://localhost:3000/${data.image}`}
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <p>
                  Product Name :-
                  <span className="text-xl font-bold">{data.productName}</span>
                </p>
                <p>
                  Product Type :-
                  <span className="text-xl font-bold">{data.productType}</span>
                </p>
                <p>
                  Product Price :-
                  <span className="text-xl font-bold">{data.productPrice}</span>
                </p>
                <p>
                  Product Rating :-
                  <span className="text-xl font-bold">
                    {data.productRating}
                  </span>
                </p>

                <button
                  type="button"
                  onClick={()=>addToCart(data)}
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }