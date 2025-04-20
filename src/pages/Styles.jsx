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
                <a href="#position">Position</a>
                <a href="#border">Borders & Radius</a>
                <a href="#images">Images & Media</a>
                <a href="#hover">Hover Effects</a>
                <a href="#response">Responsiveness</a>
            </div>

            <div id="display" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Row</h1>
                <p className='text-theme2 uppercase font-bold'>Displays the Children in a row</p>


                <p className='text-center my-2 bg-white text-black py-1'>Justify Start</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the start</p>
                <div className='flex flex-row justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Center</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the center</p>

                <div className='flex flex-row justify-center gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify End</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the Children at the end</p>

                <div className='flex flex-row justify-end gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Between</p>
                <p className='text-center text-theme2 uppercase font-bold'>Adds a space between the children</p>

                <div className='flex flex-row justify-between gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Around</p>
                <p className='text-center text-theme2 uppercase font-bold'>Adds a space around the children</p>

                <div className='flex flex-row justify-around gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Justify Evenly</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children and empty spaces evenly</p>

                <div className='flex flex-row justify-evenly gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <h1 className='text-4xl mb-4 font-bold'>Display - Flex Col</h1>
                <p className='text-theme2 uppercase font-bold'>Displays the Children in a column</p>

                <p className='text-center my-2 bg-white text-black py-1'>Items Start</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the start</p>

                <div className='flex flex-col items-start justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items Center</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the center</p>

                <div className='flex flex-col items-center justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>

                <p className='text-center my-2 bg-white text-black py-1'>Items End</p>
                <p className='text-center text-theme2 uppercase font-bold'>Aligns the children at the end</p>

                <div className='flex flex-col items-end justify-start gap-2'>
                    <div className='bg-red-900 p-10 rounded'>Item 1</div>
                    <div className='bg-green-900 p-10 rounded'>Item 2</div>
                    <div className='bg-blue-900 p-10 rounded'>Item 3</div>
                </div>
            </div>



            <div id="colors" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Colors</h1>
                <p className='text-theme2 uppercase font-bold'>add colors to (Text, Background, Borders, etc..)</p>

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
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 100% of the parent's width</p>

                <div className='bg-blue-900 p-4 text-center w-1/2 m-auto'>Width 50%</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 50% of the parent's width</p>

                <div className='bg-green-900 p-4 text-center w-[75%] m-auto'>Width 75%</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 75% of the parent's width</p>

                <div className='bg-yellow-900 p-4 text-center w-64 m-auto'>Width 64</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Takes 256px of the parent's width</p>

                <div className='bg-blue-900 p-4 text-center w-fit m-auto'>Width Fit</div>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>the width Fits the content inside the container</p>


                <div className='bg-red-900 p-4 text-center h-full'>Height Full - Default</div>
                <div className='bg-green-900 p-4 text-center h-40 flex items-center justify-center'>Height 40</div>
                <div className='bg-blue-900 p-4 text-center h-screen flex items-center justify-center'>Height Screen (100vh) viewport</div>
            </div>

            <div id="spacing" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Spacing</h1>
                <p className='text-center my-2 bg-white text-black py-1'>Margin</p>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Adds spacing outside the container</p>

                <div className='flex flex-col gap-2 bg-gray-600'>
                    <div className="m-auto size-52 bg-red-900  flex items-center justify-center">Margin Center (m-auto)</div>
                    <div className="ml-10 size-52 bg-blue-900  flex items-center justify-center">Margin Left 10 (ml-10)</div>
                    <div className="mr-10 ml-auto size-52 bg-green-900  flex items-center text-center justify-center ">Margin Right 10 (mr-10 ml-auto)</div>
                    <div className="mt-50 size-52 bg-red-900  flex items-center justify-center">Margin Top 50 (mt-50)</div>
                    <div className="mx-auto size-52 bg-green-900 flex items-center justify-center ">Margin X axis (mx-auto)</div>
                </div>
                <p className='text-center my-2 bg-white text-black py-1'>Padding</p>
                <p className='text-center text-theme2 uppercase font-bold mb-3'>Adds spacing inside the container</p>

                <div className='flex flex-col gap-2 bg-gray-600'>
                    <div className="p-10 bg-red-900  w-fit m-auto flex items-center justify-center">Padding 10 (p-10)</div>
                    <div className="pl-10 bg-blue-900 flex w-fit m-auto items-center justify-center">Padding Left 10 (pl-10)</div>
                    <div className="pr-10 bg-green-900 m-auto w-fit flex items-center justify-center">Padding Right 10 (pr-10)</div>
                    <div className="px-10 bg-red-900 m-auto w-fit flex items-center justify-center mx-auto">Padding X axis (px-auto)</div>
                    <div className="py-10 bg-blue-900 m-auto w-fit flex items-center justify-center mx-auto">Padding Y axis (py-auto)</div>
                </div>
            </div>

            <div id="position" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Position</h1>
                <div className='bg-gray-600 relative flex flex-col gap-2 h-[200vh]'>

                    <div className='relative bg-red-900 size-32 flex justify-center items-center'>Relative - Default</div>
                    <p className=' text-theme uppercase font-bold mb-3'>Default Position to the Parent </p>

                    <div className='absolute right-0 left-0 m-auto top-10 bg-blue-900 size-32 flex justify-center items-center'>Absolute</div>
                    <p className='text-center text-theme uppercase font-bold mb-3'>Can be positioned anywhere in respect to the Parent</p>

                    <div className='sticky top-0 bg-red-900 size-32 flex justify-center items-center'>Sticky</div>
                    <p className='sticky top-0 text-theme uppercase font-bold mb-3'>Sticks to the Parent</p>

                    <div className='fixed bottom-0 bg-red-900 size-32 flex justify-center items-center'>Fixed</div>
                    <p className='text-center text-theme uppercase font-bold mb-3'>Can be positioned anywhere in respect to the Viewport - Fixed</p>

                </div>
            </div>

            <div id="border" className='my-10 bg-black/60 text-white p-4 rounded'>
                <h1 className='text-4xl mb-4 font-bold'>Border & Radius</h1>

            </div>
        </div>
    )
}

export default Styles