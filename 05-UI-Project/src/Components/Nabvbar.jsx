const Nabvbar = () => {
    return (
        <div className="flex justify-between">

            <div className="flex">
                <div className="bg-[#919090] w-fit gap-2 ml-20 my-5 p-4 font-bold rounded-full">
                    <h3>Logo</h3>
                </div>
                <div className="leftnav flex gap-5 bg-[#919090] w-fit m-7 my-5 p-4 font-bold rounded-full">
                    <h3>Home</h3>
                    <h3>About Us</h3>
                    <h3>Programs</h3>
                    <h3>Coaches</h3>
                </div>
            </div>
            <div className="rightnav flex gap-5 bg-[#919090] w-fit mx-20 my-5 p-4 font-bold rounded-full">
                <button>Contact Us</button>

            </div>
        </div>
    )
}

export default Nabvbar;