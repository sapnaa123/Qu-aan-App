function Header ({search}){
    return <div className="bg-primaryColor w-full flex p-4 justify-between">
        <h1 className="sm:text-3xl text-secndaryColor font-robote">Al-Quran Kariim</h1>
        <form className="flex gap-2 mt-2 mr-4">
        <i class="fa-solid fa-magnifying-glass mt-1 text-xl"></i>
            <input  onChange={search} className="sm:w-[500px] h-[30px] rounded-xl p-2" type="text" placeholder="search"/>
        </form>
        <i class="fa-solid fa-bars text-3xl mt-2 sm:mr-5"></i>
    </div>
}

export default Header