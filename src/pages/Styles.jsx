import React from 'react'

const Styles = () => {

    return (
        <div className='bg-slate-600 py-10 px-10'>
            <div className='flex justify-between text-white'>
                <a href="#display">Display</a>
                <a href="#colors">Colors</a>
                <a href="#text">Text Styles</a>
                <a href="#width">Width & Height</a>
                <a href="#spacing">Spacing</a>
                <a>Position</a>
                <a>Borders & Radius</a>
                <a>Images & Media</a>
                <a>Hover Effects</a>
                <a>Responsiveness</a>
            </div>

            <div id="display" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Row</h1>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Start</p>
                <div className='flex flex-row justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Center</p>
                <div className='flex flex-row justify-center gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify End</p>
                <div className='flex flex-row justify-end gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Between</p>
                <div className='flex flex-row justify-between gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Around</p>
                <div className='flex flex-row justify-around gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Evenly</p>
                <div className='flex flex-row justify-evenly gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Col</h1>

                <p className='text-center my-2 bg-white text-black py-1'>Items Start</p>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items Center</p>
                <div className='flex flex-col items-center justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items End</p>
                <div className='flex flex-col items-end justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>
            </div>



            <div id="colors" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Colors</h1>
                <div className='bg-red-900 p-4 text-center'>Dark Red (bg-red-900)</div>
                <div className='bg-blue-900 p-4 text-center'>Dark Blue (bg-blue-900)</div>
                <div className='bg-black p-4 text-center'>Black (bg-black)</div>
                <div className='bg-white/10 p-4 text-center'>White Transparent (bg-white/10)</div>
                <div className='bg-[#05b6bc] p-4 text-center'>Custom Color (bg-[#05b6bc])</div>
                <div className='bg-theme p-4 text-center'>Theme Color (bg-theme)</div>
            </div>



            <div id="text" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Text Styles</h1>
                <p className='font-bold text-center'>Bold</p>
                <p className='italic text-center text-2xl'>Italic</p>
                <p className='underline text-center'>Underline</p>
                <p className='uppercase text-center'>uppercase</p>
                <p className='tracking-widest text-center text-2xl'>Spacing</p>
                <p className='text-4xl text-center'>Text 4XL</p>
                <h1 className='text-4xl mb-4 font-bold'>Text Align</h1>
                <p className='font-bold text-start bg-red-900'>Start</p>
                <p className='font-bold text-center bg-blue-900'>Center</p>
                <p className='font-bold text-end bg-green-900'>End</p>
            </div>


            <div id="width" className='my-10 bg-black/60 text-white p-4 rounded flex flex-col gap-1 justify-center'>
                <h1 className='text-4xl mb-4 font-bold'>Width & Height</h1>
                <div className='bg-red-900 p-4 text-center w-full'>Width Full</div>
                <div className='bg-red-900 p-4 text-center w-1/2 m-auto'>Width 50%</div>
                <div className='bg-red-900 p-4 text-center w-[75%] m-auto'>Width 75%</div>
                <div className='bg-red-900 p-4 text-center w-64 m-auto'>Width 64</div>

                <div className='bg-red-900 p-4 text-center h-full'>Height Full</div>
                <div className='bg-red-900 p-4 text-center h-40 flex items-center justify-center'>Height 40</div>
                <div className='bg-red-900 p-4 text-center h-screen flex items-center justify-center'>Height Screen (100vh) viewport</div>
            </div>

            <div id="spacing" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Spacing</h1>
                <div></div>
            </div>
        </div>
    )
}

export default Styles