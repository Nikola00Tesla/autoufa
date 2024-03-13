export default function NavBar(){
    return (
        <nav className="w-full bg-black">
            <div className="w-2/3 m-auto flex flex-row text-white p-6 gap-56 justify-center items-center">
                <ul className="flex flex-row gap-4">
                    <a className="text-white" href="#">Главная</a>
                    <a className="text-white" href="#">О компании</a>
                    <a className="text-white" href="#">Новости</a>
                    <a className="text-white" href="#">Товары</a>
                    <a className="text-white" href="#">Статьи</a>
                    <a className="text-white" href="#">Контакты</a>
                </ul>
                <div className="flex flex-row gap-4">
                    <input className="rounded-md" type="search" placeholder="поиск..."></input>
                    <button className="text-white border-solid px-3 border rounded h-8 border-white">Вход</button>
                    <button className="text-black border-solid px-3 rounded h-8 bg-amber-400">Регистрация</button>
                </div>
            </div>
        </nav>
    )
}