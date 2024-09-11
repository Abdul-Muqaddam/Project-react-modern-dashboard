import React from 'react';
import './App.css'

function App() {


  return (
    <>
      <div className='h-[370vh] bg-custom-black '>
        <div className='bg-custom-pattern h-[210vh] pt-15 bg-[top_3.3rem_center] '>
          <nav className='flex justify-around items-center h-[3.125rem]'>
            <div className='flex items-center w-[21.801rem] h-[1.688rem] justify-between'>
              <div className='flex items-center'>
                <img src="/src/assets/Autumn.svg" alt="" />
                <div className='text-[white] font-bold text-[0.941rem]'>Stellar</div>
              </div>
              <ul className='flex w-[15.125rem] items-center justify-between'>
                <li className='text-[white] text-[0.732rem] cursor-pointer'>Product</li>
                <li className='text-[white] text-[0.732rem] cursor-pointer'>Pricing</li>
                <li className='text-[white] text-[0.732rem] cursor-pointer'>Changelog</li>
              </ul>
            </div>
            <div className='w-[9.517rem] flex justify-around'>
              <button className='text-[white] text-[0.732rem] hover:border-[1px] border-solid hover:bg-[#fff]/5 border-[#ffff]/10 border-opacity-5 rounded-[0.45rem] px-4 py-1  hover:shadow-buttons-shadow hover:drop-shadow-outter-shadow hover:backdrop-blur-[16.72px] transition-all duration-[0.2s] ease-in-out'>Log in</button>
              <button className='text-[white] text-[0.732rem] hover:border-[1px] border-solid hover:bg-[#fff]/5 border-[#ffff]/10 border-opacity-5 rounded-[0.45rem] px-4 py-1  hover:shadow-buttons-shadow hover:backdrop-blur-[16.72px] transition-all duration-[0.2s] ease-in-out '>Sign up</button>
            </div>
          </nav>
          <hr />
          <div className='flex justify-center items-center flex-col h-[200vh]'>
            <div className='flex justify-between items-center flex-col h-[53vh] w-[40vw] '>
              <button className='hover:bg-[#fff]/5 hover:shadow-buttons-shadow hovers:drop-shadow-outter-shadow hover:border-[1px] border-solid border-[#fff]/10 rounded-[0.423rem] text-[white] text-[0.679rem] w-[8.688rem] h-[1.689rem] flex justify-center items-center transition-all duration-[0.2s] ease-in-out'>
                New components <div className='text-[0.813rem] ml-[10px]'> &gt;</div>
              </button>
              <div className='bg-custom-gradient bg-clip-text text-transparent font-medium text-[3.136rem] w-[30vw] text-center leading-tight'>Craft Stunning User Interfaces</div>
              <div className='text-[#fff]/70 w-[40vw] text-center'>This UI kit is a perfect blend of modern design and practical usability, making it an ideal choice for a wide range of projects including web applications, mobile apps, and dashboard interfaces.</div>
              <button className="hover:bg-gradient-button text-white hover:shadow-free-trail-shadow 
              hover:border-2 border-solid border-[#fff]/20 flex justify-center items-center 
              w-[11.224rem] h-[2.317rem] rounded-[0.523rem] transition-all duration-[0.2s] ease-in-out z-10">
                Start free trail <div className="text-[white] ml-[10px]">&gt;</div>
              </button>

              <hr />

            </div>
            <div className='text-white h-[130vh] w-[80vw] bg-[#050505]/90 shadow-dashboard-inset-shadow drop-shadow-dashboard-outset-shadow backdrop-blur-[12.54px] rounded-[1.176rem] flex justify-between'>
              <div className='w-[20vw] shadow-dashboard-outset-left bg-[#000]/60 h-[130vh] rounded-ss-[1.176rem] flex justify-center items-center '>
              <div className='flex flex-col justify-between items-center h-[90%]'>
                <div  className='w-[9.014rem] h-[23.289rem] flex flex-col justify-between'>
                  <div className='flex justify-start items-center cursor-pointer'>
                    <div className='h-[1.838rem] w-[1.838rem] flex justify-center items-center'>
                    <img src="/src/assets/App Blocks.svg" alt="" className='h-[1.338rem] w-[1.338rem]' />
                    </div>
                    <div className='font-bold text-[0.706rem]'>
                      Steller
                    </div>
                  </div>
                  
                  <div className='flex justify-between flex-col w-[9.014rem] h-[18.968rem]'>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient '>
                    <div className='flex w-[5.313rem] justify-between cursor-pointer  '>
                      <img src="/src/assets/Menu Nine Circles.svg" alt="" />
                      <div className='text-[0.549rem]'>All Components</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[3.313rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Hand Point Finger.svg" alt="" />
                      <div className='text-[0.549rem]'>Buttons</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[3.213rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Menu Square.svg" alt="" />
                      <div className='text-[0.549rem]'>Menus</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[3.063rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Credit Card Double Left.svg" alt="" />
                      <div className='text-[0.549rem]'>Cards</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[3rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Media Circles Play Circles.svg" alt="" />
                      <div className='text-[0.549rem]'>Icons</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[3.813rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Pattern Lock.svg" alt="" />
                      <div className='text-[0.549rem]'>Patterns</div>
                    </div>
                    </div>
                    <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                    <div className='flex w-[5rem] justify-between cursor-pointer'>
                      <img src="/src/assets/Image.svg" alt="" />
                      <div className='text-[0.549rem]'>Backgrounds</div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className='w-[9.014rem] h-[6.25rem] flex justify-between  flex-col'>
                  <hr />
                  <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                  <div className='flex w-[6.13rem] justify-between cursor-pointer'>
                    <img src="/src/assets/Device Keyboard.svg" alt="" />
                    <div className='text-[0.549rem]'>Keyboard Shortcut</div>
                  </div>
                  </div>
                  <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                  <div className='flex w-[3.513rem] justify-between cursor-pointer'>
                    <img src="/src/assets/Settings 2.svg" alt="" />
                    <div className='text-[0.549rem]'>Settings</div>
                  </div>
                  </div>
                  <div className='flex justify-start items-center z-10 w-[9.014rem] h-[1.596rem] hover:border-l-[1px] hover:border-[#2670E9] hover:bg-left-dashboard-gradient'>
                  <div className='flex w-[4.513rem] justify-between cursor-pointer'>
                    <img src="/src/assets/Help.svg" alt="" />
                    <div className='text-[0.549rem]'>Help Center</div>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              <div className='w-[58vw] h-[130vh]'>
                <div className='w-[55vw] h-[6vh] border-2 border-[white] flex items-center'>
                  <div className='w-[15.688rem] h-[5vh] rounded-[3.875rem] pl-3 pt-[2px] border-[1.5px] border-solid border-[#fff]/10 bg-[#000000]/60'>Search <img src="/src/assets/Magnifying Glass.svg" alt="" /></div>
                  <div>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[55.079rem] w-[45.079rem] bg-blue-gradient rounded-[31.25rem] blur-[100px] absolute top-[12rem] left-72'>

        </div>
      </div>

    </>
  )
}

export default App
