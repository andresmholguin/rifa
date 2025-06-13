import Candado from "../../assets/img/candado.png";
import supabase from "../../supabase-client";
import { useState, useEffect } from "react";

const SectionInputs = () => {
  const [sorteo, setSorteo] = useState({
    nombre_sorteo: "Cargando...",
  });
  const [numerosSorteo, setNumerosSorteo] = useState([]);
  const [numerosComprador, setNumerosComprador] = useState({
    numeroUno: "",
    numeroDos: "",
    numeroTres: "",
  });

  useEffect(() => {
    const fetchInfoSorteo = async () => {
      try {
        const { data: sorteoData, error: sorteoError } = await supabase
          .from("sorteos")
          .select("*")
          .eq("estado", "true");

        if (sorteoError) {
          console.error("Error al obtener el sorteo:", sorteoError);
          setSorteo({ nombre_sorteo: "Error al cargar" });
          return;
        }

        if (sorteoData && sorteoData.length > 0) {
          setSorteo(sorteoData[0]);
          fetchNumerosSorteo(sorteoData[0]);
        } else {
          setSorteo({ nombre_sorteo: "No hay sorteos activos" });
        }
      } catch (error) {
        console.error("Error inesperado:", error);
        setSorteo({ nombre_sorteo: "Error al cargar" });
      }
    };

    fetchInfoSorteo();
  }, []);

  const fetchNumerosSorteo = async (sorteo) => {
    try {
      const { data: numerosSorteoData, error: numerosSorteoError } =
        await supabase
          .from("numeros_sorteo")
          .select("*")
          .eq("sorteosID", sorteo.id)
          .eq("disponible", "true");

      if (numerosSorteoError) {
        console.error(
          "Error al obtener los numeros del sorteo",
          numerosSorteoError
        );
        setNumerosSorteo([]);
        return;
      }
      if (numerosSorteoData.length === 0) {
        console.warn("No existen números disponibles para este sorteo");
        setNumerosSorteo([]);
      } else {
        setNumerosSorteo(numerosSorteoData);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
      setNumerosSorteo("Error al cargar los números del sorteo");
    }
  };

  const validarNumeroDisponible = (numValue, numsList) => {
    return numsList.some((num) => num == numValue);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validarNumeroDisponible(value, numerosSorteo)) {
      setNumerosComprador((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    console.log(numerosComprador);
  };

  return (
    <section className="mb-16 w-full">
      <div className="flex flex-col gap-3 px-12 py-12">
        <h2 className="text-center text-2xl font-bold mt-8">
          Elige tus números de la suerte
        </h2>
        <h2 className="text-center text-2xl font-bold my-2">
          Sorteo: {sorteo.nombre_sorteo}
        </h2>

        <div className="place-items-center">
          <label htmlFor="numeroUno">
            Numero #1 <span>(4 cifras)</span>
          </label>
          <div className="flex items-center mt-4">
            <input
              type="number"
              id="numeroUno"
              name="numeroUno"
              onBlur={handleBlur}
              className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none "
            />
            <button className="bg-white text-black px-2 py-2 rounded-r-md  cursor-pointer">
              <img src={Candado} className="w-6" alt="candado" />
            </button>
          </div>
        </div>
        <div className="place-items-center">
          <label htmlFor="numeroDos">
            Numero #2 <span>(4 cifras)</span>
          </label>
          <div className="flex items-center mt-4">
            <input
              type="number"
              id="numeroDos"
              name="numeroDos"
              className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none "
            />
            <button className="bg-white text-black px-2 py-2 rounded-r-md cursor-pointer">
              <img src={Candado} className="w-6" alt="candado" />
            </button>
          </div>
        </div>
        <div className="place-items-center">
          <label htmlFor="numeroTres">
            Numero #3 <span>(4 cifras)</span>
          </label>
          <div className="flex items-center mt-4">
            <input
              type="number"
              id="numeroTres"
              name="numeroTres"
              className="bg-transparent text-center border border-white text-white text-2xl w-60 rounded-md p-6 py-2 appearance-none  "
            />
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
    </section>
  );
};

export default SectionInputs;
