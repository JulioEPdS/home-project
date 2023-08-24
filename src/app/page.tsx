import {poppins} from '../utils/fonts';

export default function Home() {
  return (
    <main className="container flex mx-auto w-screen h-screen">

        <div className="grid mx-auto w-10/12 grid-cols-12 gap-4 items-center">

          <div className="flex flex-col place-content-center col-start-5 col-span-4 h-2/4 bg-white text-black text-center">

            <p className="text-xl2 text-jppurple poppins.className font-thin tracking-widest">DEV</p>
            <p className="text-xl2 text-jppurple poppins.className font-black tracking-widest">JPS</p>
            <div>
              <p className='text-sm poppins.className font-black font-bold tracking-widest'>COMPUTER SYSTEMS ENGINEER</p>
              <p className='text-xs poppins.className font-black font-light tracking-widest'>FULL STACK DEVELOPER ENTERPRISE IT SOLUTIONS</p>
            </div>

          </div>

        </div>

    </main>
  )
}
