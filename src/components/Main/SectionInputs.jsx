import Candado from "../../assets/img/candado.png";
import supabase from "../../supabase-client";
import { useState, useEffect } from "react";

const SectionInputs = () => {


    const [sorteo, setSorteo] = useState({
        nombre_sorteo: 'Cargando...',
    })

    useEffect(() => {
        const fetchSorteo = async () => {
            const { data: sorteoData, error: sorteoError } = await supabase
                .from('sorteos')
                .select('*')
                .eq('estado', 'true')
            if (sorteoError) {
                console.error('Error al obtener el sorteo:', sorteoError)
            } else {
                if (sorteoData && sorteoData.length > 0) {
                    setSorteo(sorteoData[0]); // Asegura que estás tomando solo el primer resultado.
                  } else {
                    setSorteo(null); // Si no hay resultados, establece null explícitamente.
                  }
                
            }   
        }
        fetchSorteo()
    }, [])

    

    
  return <section className="mb-16 w-full">
        <div className="flex flex-col gap-3 px-12 py-12">
        <h2 className="text-center text-2xl font-bold mt-8" >Elige tus números de la suerte</h2>
        <h2 className="text-center text-2xl font-bold my-2" >Sorteo: {sorteo.nombre_sorteo}</h2>

            <div className="place-items-center">
                <label htmlFor="numero1">Numero #1 <span>(4 cifras)</span>
                </label>
                <div className="flex items-center mt-4">
                    <input type="number" id="numero1" name="numero1" className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none "  />
                    <button className="bg-white text-black px-2 py-2 rounded-r-md  cursor-pointer">
                        <img src={Candado} className="w-6" alt="candado" />
                    </button>
                </div>
            </div>
            <div className="place-items-center">
                <label htmlFor="numero2">Numero #2 <span>(4 cifras)</span>
                </label>
                <div className="flex items-center mt-4">
                    <input type="number" id="numero2" name="numero2" className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none " />
                    <button className="bg-white text-black px-2 py-2 rounded-r-md cursor-pointer">
                        <img src={Candado} className="w-6" alt="candado" />
                    </button>
                </div>
            </div>
            <div className="place-items-center">
                <label htmlFor="numero3">Numero #3 <span>(4 cifras)</span>
                </label>
                <div className="flex items-center mt-4">
                    <input type="number" id="numero3" name="numero3" className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none  " />
                    <button className="bg-white text-black px-2 py-2 rounded-r-md cursor-pointer">
                        <img src={Candado} className="w-6" alt="candado" />
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center gap-3">
        <button className="btn btn-success">Asegurar</button>
        
        <button className="btn btn-outline btn-success">Aleatorio</button>
        <button className="btn btn-outline btn-error">Limpiar</button>
        </div>
    </section>;
};

export default SectionInputs;