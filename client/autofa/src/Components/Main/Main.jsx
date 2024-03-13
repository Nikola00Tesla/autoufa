import SliderMain from "./SliderMain";

export default function Main(){
    return(
        <main className="w-2/3 m-auto text-white p-4 gap-56">
            <div className="flex flex-col absolute z-1 inset-x35 justify-center">
                <h1 className="text-white text-3xl text-center p-6">
                    Купи купи
                </h1>
                <h1 className="text-white text-3xl p-6">
                    Залупа залупа
                </h1>
            </div>
            <SliderMain/>
        </main>
    )
}