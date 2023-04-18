import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AvaliableCarDetail from "./AvaliableCarDetail";
import { BsArrowRight } from "react-icons/bs";
import "../style/booking.css";


interface City {
  label: string;
  id: number;
}

interface TotalAvaliableCity {
  totalAvaliableCity: City[];
}

interface FromTo {
  from: string;
  to: string;
}

interface CarNameAndReachPath {
  name: string;
  mmName: string;
  route: FromTo[];
}

// interface Route {
//   route: FromTo[];
// }

const SearchCar = () => {
  const [dataFromFetching, setDataFromFetching] =
    useState<TotalAvaliableCity>();
  const [fromSelected, setFromSelected] = useState<FromTo[]>([]);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [carName, setCarName] = useState<string[]>([]);

  //constext state
  const [searchCarSelectedData , setSearchCarSelectedData] = useState({
    ele : null,
    from : null,
    to : null
  })

  // const fetchAllData = async () => {
  //   const url = `http://localhost:5000/ticketBooking`
  //   const response = await fetch(url);
  //   const data = await response.json()
  //   console.log(data)
  //   setDataFromFetching(data)
  // }

  // useEffect(() => {
  //   fetchAllData()
  // }, [])

  const totalAvaliableCity = [
    { label: "Ahtet Min Hla (အထက်မင်းလှ)", id: 1 },
    { label: "Ann (အမ်း)", id: 1 },
    { label: "AungLan (အောင်လံ)", id: 2 },
    { label: "AungPan (အောင်ပန်း)", id: 3 },
    { label: "AyarDaw (အရာတော်)", id: 4 },
    { label: "AyeTharYar (အေးသာယာ)", id: 5 },
    { label: "Bagan / Naung-U (ပုဂံ / ညောင်ဦး)", id: 6 },
    { label: "Bago (ပဲခူး)", id: 7 },
    { label: "Bahin (ဗဟင်း)", id: 8 },
    { label: "BanMauk (ဗန်းမောက်)", id: 9 },
    { label: "Bhamo (ဗန်းမော်)", id: 10 },
    { label: "Bilin (ဘီးလင်း)", id: 11 },
    { label: "BokPyin (ဘုတ်ပြင်း)", id: 12 },
    { label: "Budalin (ဘုတလင်)", id: 13 },
    { label: "Chauk (ချောက်)", id: 14 },
    { label: "Chaung Tha (ချောင်းသာ)", id: 15 },
    { label: "Chaung U ()", id: 16 },
    { label: "Chaungzon ()", id: 17 },
    { label: "DagonAyar(Yangon) ()", id: 18 },
    { label: "Daik-U ()", id: 19 },
    { label: "Danai ()", id: 20 },
    { label: "Danubyu ()", id: 21 },
    { label: "Dawei ()", id: 22 },
    { label: "Demoso ()", id: 23 },
    { label: "Gangaw ()", id: 24 },
    { label: "Gwa ()", id: 25 },
    { label: "Gaway Gone ()", id: 26 },
    { label: "Gyeik Taw ()", id: 27 },
    { label: "GyoBinGauk ()", id: 28 },
    { label: "Hakha ()", id: 29 },
    { label: "Ham Myint Mo ()", id: 30 },
    { label: "HeHoe ()", id: 31 },
    { label: "Hinthada ()", id: 32 },
    { label: "Hlegu ()", id: 33 },
    { label: "Hopin ()", id: 34 },
    { label: "Hopong ()", id: 35 },
    { label: "Hpa-An ()", id: 36 },
    { label: "Hpakan ()", id: 37 },
    { label: "Hpayargyi ()", id: 38 },
    { label: "Hseni ()", id: 39 },
    { label: "Hsipaw ()", id: 40 },
    { label: "HtoneBo ()", id: 41 },
    { label: "Indaw ()", id: 42 },
    { label: "Ingapu ()", id: 43 },
    { label: "Inn Ta Kaw ()", id: 44 },
    { label: "Inn Ma ()", id: 45 },
    { label: "Kalaw ()", id: 46 },
    { label: "Kale ()", id: 47 },
    { label: "Kalewa ()", id: 48 },
    { label: "Kamma ()", id: 49 },
    { label: "Kambalu ()", id: 50 },
    { label: "KanBya ()", id: 51 },
    { label: "Kanpetlet ()", id: 52 },
    { label: "Katha ()", id: 53 },
    { label: "KawKaReik ()", id: 54 },
    { label: "KawThaung ()", id: 55 },
    { label: "KayTuMadi ()", id: 56 },
    { label: "Keng Tung ()", id: 57 },
    { label: "Khin-U ()", id: 58 },
    { label: "Kho Lam ()", id: 59 },
    { label: "Koebin ()", id: 60 },
    { label: "Kon Zaung ()", id: 61 },
    { label: "Kume ()", id: 62 },
    { label: "Kutkai ()", id: 63 },
    { label: "Kwin Hla ()", id: 64 },
    { label: "KyaikKami ()", id: 65 },
    { label: "KyaInSeikGyi ()", id: 66 },
    { label: "Kyangin ()", id: 67 },
    { label: "Kyauk Gyi ()", id: 68 },
    { label: "KyaukMe ()", id: 69 },
    { label: "KyaukPaDaung ()", id: 70 },
    { label: "Kyauk Phyu ()", id: 71 },
    { label: "KyaukSe ()", id: 72 },
    { label: "KyaukTaGar ()", id: 73 },
    { label: "KyaukTaw ()", id: 74 },
    { label: "KyaungTawYar ()", id: 75 },
    { label: "Kyaw ()", id: 76 },
    { label: "Kyeintali ()", id: 77 },
    { label: "Kyun Hla ()", id: 77 },
    { label: "Kyun Chaung ()", id: 77 },
    { label: "Lashio ()", id: 77 },
    { label: "Lat Yin Ma ()", id: 77 },
    { label: "Laukkaing ()", id: 77 },
    { label: "Lawksawk ()", id: 77 },
    { label: "Lay Taung ()", id: 77 },
    { label: "Lay Tine Sin ()", id: 77 },
    { label: "Letpadan ()", id: 77 },
    { label: "Letpanhla ()", id: 77 },
    { label: "Lewe ()", id: 77 },
    { label: "Loikaw ()", id: 77 },
    { label: "Loilem ()", id: 77 },
    { label: "Lonkin ()", id: 77 },
    { label: "Ma-ei ()", id: 77 },
    { label: "Mabein ()", id: 77 },
    { label: "Madaya ()", id: 77 },
    { label: "Magway ()", id: 77 },
    { label: "Mahar Myaing ()", id: 77 },
    { label: "Mahlaing ()", id: 77 },
    { label: "Malun ()", id: 77 },
    { label: "Mandalay ()", id: 98 },
    { label: "Maubin ()", id: 77 },
    { label: "Maw Hun ()", id: 77 },
    { label: "Maw Luu ()", id: 77 },
    { label: "Mawlamyine ()", id: 77 },
    { label: "Me Za Li Kone ()", id: 77 },
    { label: "Meiktila ()", id: 77 },
    { label: "Migyaungye ()", id: 77 },
    { label: "MinBya ()", id: 77 },
    { label: "Minbu ()", id: 77 },
    { label: "Moebyel ()", id: 77 },
    { label: "Mogaung ()", id: 77 },
    { label: "Mogok ()", id: 77 },
    { label: "Mohnyin ()", id: 77 },
    { label: "Mong Hsu ()", id: 77 },
    { label: "Mongmit ()", id: 77 },
    { label: "Monywa ()", id: 77 },
    { label: "Mrauk-U ()", id: 77 },
    { label: "Mudon ()", id: 77 },
    { label: "Muse ()", id: 77 },
    { label: "Mya Taung ()", id: 77 },
    { label: "Myaing ()", id: 77 },
    { label: "Myanaung ()", id: 77 },
    { label: "Myaungmya ()", id: 77 },
    { label: "Myawaddy ()", id: 77 },
    { label: "Myeik ()", id: 77 },
    { label: "Myingyan ()", id: 77 },
    { label: "Myitchay ()", id: 77 },
    { label: "Myitkyina ()", id: 77 },
    { label: "Myitnge ()", id: 77 },
    { label: "Myittha ()", id: 77 },
    { label: "Myo Hla ()", id: 77 },
    { label: "Myo Gyi ()", id: 77 },
    { label: "Myogyi ()", id: 77 },
    { label: "Namhkan ()", id: 77 },
    { label: "Namsang ()", id: 77 },
    { label: "Namsi Awng ()", id: 77 },
    { label: "Nan Mar ()", id: 77 },
    { label: "Nanmati ()", id: 77 },
    { label: "Natmauk ()", id: 77 },
    { label: "Natogyi ()", id: 77 },
    { label: "Nattalin ()", id: 77 },
    { label: "Naungtayar ()", id: 77 },
    { label: "Nawnghkio ()", id: 77 },
    { label: "Naypyitaw ()", id: 77 },
    { label: "Naypyitaw (Bawga) ()", id: 77 },
    { label: "Naypyitaw (Myoma) ()", id: 77 },
    { label: "Naypyitaw (Thapyaygone) ()", id: 77 },
    { label: "Ngapali ()", id: 77 },
    { label: "Ngar O ()", id: 77 },
    { label: "Ngwe Saung ()", id: 77 },
    { label: "Nyaung Chay Htauk ()", id: 77 },
    { label: "Nyaung Kone ()", id: 77 },
    { label: "Nyaung Lay Pin ()", id: 77 },
    { label: "Nyaung Pin Thar ()", id: 77 },
    { label: "Nyaung Shwe( Inle ) ()", id: 77 },
    { label: "NyaungPin ()", id: 77 },
    { label: "Nyaungdon ()", id: 77 },
    { label: "Oak Pho ()", id: 77 },
    { label: "Oke Shit Pin ()", id: 77 },
    { label: "Oktwin ()", id: 77 },
    { label: "Padaung ()", id: 77 },
    { label: "Padein ()", id: 77 },
    { label: "Padigon ()", id: 77 },
    { label: "Pakokku ()", id: 77 },

    { label: " ()", id: 77 },

    { label: "MuSe ()", id: 99 },
    { label: "Yangon ()", id: 100 },
  ];

  const carNameAndReachPath = [
    {
      name: "ShweMandalar",
      mmName: "ရွှေမန္တလာ",
      route: [
        { from: "Mandalay ()", to: "MuSe ()" },
        { from: "MuSe ()", to: "Mandalay ()" },
        { from: "Yangon ()", to: "Mandalay ()" },
        { from: "Yangon ()", to: "Pyin-Oo-Lwin ()" },
        { from: "Yangon ()", to: "Nay Pyi Taw ()" },
        { from: "Yangon ()", to: "Tat-Kone ()" },
        { from: "Yangon ()", to: "Lasho ()" },
        { from: "Mandalay ()", to: "Yangon ()" },
        { from: "Yangon ()", to: "Muse ()" },
        { from: "Yangon ()", to: "Pakokku ()" },
        { from: "Yangon ()", to: "Bagan / Naung-U ()" },
        { from: "Yangon ()", to: "Monywa ()" },
        { from: "Yangon ()", to: "KyaukSe ()" },
        { from: "Yangon ()", to: "Taunggyi ()" },
        { from: "Yangon ()", to: "Hopone ()" },
        { from: "Yangon ()", to: "KyaukTaw ()" },
        { from: "Pyin-Oo-Lwin ()", to: "Yangon" },
      ],
    },

    {
      name: "Bagan-Min-Thar",
      mmName: "ပုဂံမင်းသား",
      route: [
        { from: "Yangon ()", to: "KyaukPaDaung ()" },
        { from: "Yangon ()", to: "Bagan / Naung-U (ပုဂံ / ညောင်ဦး) ()" },
        { from: "Yangon ()", to: "Pakokku ()" },
        { from: "Yangon ()", to: "Taunggyi ()" },
      ],
    },

    {
      name: "Mandalar Min",
      mmName: "မန္တလာမင်း",
      route: [
        { from: "Yangon ()", to: "Mandalay ()" },
        { from: "Yangon ()", to: "Pyin-Oo-Lwin ()" },
        { from: "Yangon ()", to: "Meiktila ()" },
        { from: "Yangon ()", to: "Naypyitaw ()" },
        { from: "Yangon ()", to: "Mawlamyine ()" },
        { from: "Yangon ()", to: "Tatkon ()" },
        { from: "Yangon ()", to: "Taunggyi ()" },
        { from: "Yangon ()", to: "Monywa ()" },
        { from: "Yangon ()", to: "KyaukSe ()" },
        { from: "Yangon ()", to: "Mudon ()" },
        { from: "Yangon ()", to: "Thanbyuzayat ()" },
      ],
    },

    {
      name: "Chaung Tha",
      mmName: "မန္တလာမင်း",
      route: [
        { from: "Yangon ()", to: "Mandalay ()" },
        { from: "Yangon ()", to: "Pyin-Oo-Lwin ()" },
        { from: "Yangon ()", to: "Meiktila ()" },
        { from: "Yangon ()", to: "Naypyitaw ()" },
        { from: "Yangon ()", to: "Mawlamyine ()" },
        { from: "Yangon ()", to: "Tatkon ()" },
        { from: "Yangon ()", to: "Taunggyi ()" },
        { from: "Yangon ()", to: "Monywa ()" },
        { from: "Yangon ()", to: "KyaukSe ()" },
        { from: "Yangon ()", to: "Mudon ()" },
        { from: "Yangon ()", to: "Thanbyuzayat ()" },
      ],
    },
  ];

  //selected item from mui autocomplete component

  const handleChangedForFromAutoComplete = (event: any) => {
    const selectedCity = event.target.innerText;
    console.log(selectedCity);
    const avaliableCity = carNameAndReachPath.map((item) => {
      return item.route.filter((elem) => {
        return elem.from === selectedCity;
      });
    });
    console.log(avaliableCity);
    const finalResult: FromTo[] = [];
    avaliableCity.forEach((item) =>
      item.forEach((ele) => finalResult.push(ele))
    );

    setFromSelected(finalResult);
    setFrom(selectedCity);
  };

  const handleChangedForToAutoComplete = (event: any) => {
    const selectedCity = event.target.innerText;
    setTo(selectedCity);
  };

  console.log("from selected....", fromSelected);

  const nav = useNavigate();

  const handleClick = () => {
    if (!from || !to) {
      return alert("Select City for Your Trip.....");
    }
    // console.log("from...." , from)
    // console.log("to....." , to)

    const avaliableCar = carNameAndReachPath.map((elem) => {
      const selectedCityFromAndToComponent = elem.route.find((item) => {
        return item.from === from && item.to === to;
      });
      console.log(
        "selectedCityFromAndToMuiComponent-------",
        selectedCityFromAndToComponent
      );

      if (selectedCityFromAndToComponent) {
        console.log("elem.........", elem);
        return elem;
      }
    });
    console.log("avaliableCar------", avaliableCar);

    const carname = avaliableCar.map((ele) => (ele ? ele.name : ""));
    setCarName(carname);
    // nav('/avaliableCarDatail' , {state : { car : carName}})

    // useEffect(() => {
    //   nav('/avaliableCarDatail' , {state : { car : carName}})
    // } , [handleClick])
  };

  // const handleClickClick = () => {
  //   nav('/avaliableCarDatail' , {state : { car : carName}})

  // }

  console.log(fromSelected);

  const fillYourInfo = () => {
    setSearchCarSelectedData((value) : any => {
     console.log() 
    })
    nav("/fillYourInfo");
  };

  return (
    <div className="sm:w-full md:w-[80%]">
      <div className=" w-[23rem] bg-gray-200 border border-gray-200 rounded-md shadow-lg h-[15rem] mx-auto">
        <div className=" h-full py-6 px-5">
          <div className="">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={totalAvaliableCity}
              className=" w-[20rem]"
              renderInput={(params) => <TextField {...params} label="From" />}
              onChange={handleChangedForFromAutoComplete}
            />
          </div>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={fromSelected.map((ele) => {
                return { label: ele.to };
              })}
              className=" w-[20rem] mt-5"
              renderInput={(params) => <TextField {...params} label="To" />}
              onChange={handleChangedForToAutoComplete}
            />
          </div>

          <div className=" my-5 flex">
            <button
              className="py-2 px-5 bg-sky-600 text-white rounded-md w-full"
              onClick={handleClick}
            >
              Search Now
            </button>
          </div>
        </div>
      </div>

      <div>
        {carName.map((ele, index) => {
          return (
            <div
              className=" border mt-5 shadow-lg flex mx-auto carBg h-64 md:w-[60%] "
              key={index}
              style={{
                display: ele.length !== 0 ? "block" : "none",
              }}
            >
              <div className=" w-full">
                <img
                  src="/BusLogo.jpg"
                  width={"100%"}
                  className=" h-64"
                  alt="shout Htae"
                />
                <div className=" sm:block md:flex justify-center ">
                  <h1 className=" text-3xl border text-white shadow-lg rounded-md bg-[#393186] sm:w-auto md:w-[50%] px-3 py-2 font-bold text-center mt-4">{ele}</h1>
                </div>
                <div className="flex justify-between align-middle items-center h-full ">
                  <div className="w-[60%] md:w-[70%] lg-flex text-center">
                    <h1 className=" text-2xl mx-6 font-semibold border bg-sky-600 rounded-lg text-white shadow-md px-2 py-1 ">
                      {from}
                    </h1>
                    <div className="text-xl text-center mx-3 my-5">---To---</div>
                    <h1 className=" text-2xl mx-6 font-semibold border bg-sky-600 text-white rounded-lg shadow-md px-2 py-1 ">
                      {to}
                    </h1>
                  </div>

                  <div className="flex align-middle items-center">
                    <button
                      className=" bg-gray-200 py-2 px-4 text-black font-semibold border rounded-lg mr-7"
                      onClick={fillYourInfo}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCar;
