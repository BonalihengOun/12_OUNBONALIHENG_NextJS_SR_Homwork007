import Image from "next/image";
import HomePageComponents from "./components/HomePageComponents";

export default async function Home() {

  return (
    <main>
      <div className="w-auto h-screen  top-0">
        <div className="w-full h-full z-[-1]">
          <img
            className=" absolute top-0 brightness-50"
            src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x)"
            alt=""
          />
        </div>
      </div>
      <HomePageComponents />
    </main>
  );
}
