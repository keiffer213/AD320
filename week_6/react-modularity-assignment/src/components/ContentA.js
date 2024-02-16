import React from 'react'
import { TestButton1 } from './SharedComponents'


export const ContentA = () => {
  return (
    <div className='m-3'>
      <h2 className='text-xl my-2'>ContentA</h2>
      <p className=' text-justify'>Proin quis tortor dui. Curabitur tempus magna iaculis lorem sagittis porta at ut purus. Praesent pharetra leo a tellus eleifend, eget tristique massa sollicitudin. Ut commodo vulputate mi nec ultricies. Maecenas eu leo a enim auctor ornare maximus a orci. Sed ultricies tortor sit amet nunc rutrum pretium. Integer nec turpis quis nisl placerat iaculis. Etiam cursus velit eget mi condimentum pharetra. Quisque vitae luctus ex.

      Vestibulum convallis consectetur mattis. Vestibulum a porttitor urna. Sed orci leo, molestie mollis posuere ac, facilisis nec justo. Sed pretium orci sit amet augue sodales placerat. Quisque efficitur, risus sed lobortis luctus, odio urna cursus odio, ut feugiat justo metus sit amet felis. Integer nec lorem est. Maecenas nec ullamcorper augue. Proin et posuere odio, vel faucibus ligula. Vestibulum vulputate gravida augue, in molestie massa scelerisque ac. Quisque rutrum ex nec volutpat ultricies. Integer non ex ac dolor sodales tincidunt. Sed id interdum ligula. Suspendisse facilisis ac magna at facilisis.</p>
      
      <TestButton1 />
    </div>
  )
}
