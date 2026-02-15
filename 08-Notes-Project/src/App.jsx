import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, { title, details }])
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    // Changed h-screen to min-h-screen and added flex-col for mobile
    <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white font-sans'>

      {/* LEFT SIDE: FORM SECTION */}
      {/* lg:h-screen keeps the form sticky on large screens while the right side scrolls */}
      <form 
        onSubmit={submitHandler} 
        className='flex gap-4 w-full lg:w-1/3 lg:h-screen p-6 lg:p-10 flex-col items-start bg-[#111] lg:sticky lg:top-0'
      >
        <h1 className='text-3xl lg:text-4xl mb-4 font-bold tracking-tight'>Add Notes</h1>

        <input
          required
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-3 bg-zinc-800 border-none outline-none rounded-lg text-white focus:ring-2 focus:ring-white transition-all'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          required
          placeholder='Write Details here'
          className='px-5 w-full font-medium h-32 lg:h-40 py-3 bg-zinc-800 border-none outline-none rounded-lg text-white focus:ring-2 focus:ring-white transition-all resize-none'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className='bg-white hover:bg-gray-200 active:scale-95 font-bold w-full outline-none text-black px-5 py-3 rounded-lg transition-all'
        >
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE: DISPLAY SECTION */}
      <div className='w-full lg:w-2/3 p-6 lg:p-10'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-8'>Recent Notes</h1>
        
        {task.length === 0 ? (
          <div className='h-64 flex items-center justify-center border-2 border-dashed border-zinc-700 rounded-2xl'>
            <p className='text-zinc-500 text-lg'>Your Notes will appear here</p>
          </div>
        ) : (
          /* Using Grid for better responsiveness than flex-wrap */
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center lg:justify-items-start'>
            {task.map(function (elem, idx) {
              return (
                <div 
                  key={idx} 
                  className="flex justify-between flex-col items-start relative h-64 w-full max-w-60 bg-cover rounded-2xl text-black pt-10 pb-5 px-6 shadow-xl transition-transform hover:scale-105 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
                >
                  <div className='w-full overflow-hidden'>
                    <h3 className='leading-tight text-xl font-extrabold wrap-break-word'>{elem.title}</h3>
                    <p className='mt-2 leading-tight text-sm font-semibold text-gray-700 wrap-break-word line-clamp-5'>
                      {elem.details}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => deleteNote(idx)} 
                    className='w-full mt-2 cursor-pointer active:scale-95 bg-red-600 hover:bg-red-700 py-2 text-xs rounded-md font-bold text-white transition-colors'
                  >
                    Delete Note
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default App