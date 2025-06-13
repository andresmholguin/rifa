import { useState } from "react";
import supabase from "../../supabase-client";

const FormComprador = () => {
  // const [sorteoId, setSorteoId] = useState('82821eff-234e-4fcf-aaaa-2e5c44e0d71a')
  const [referidoId, setReferidoId] = useState(null);
  const [formData, setFormData] = useState({
    nombre_comprador: "",
    email_comprador: "",
    celular_comprador: "",
    cc: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const { data, error } = await supabase
        .from("compradores")
        .insert([formData])
        .select();

      if (referidoId) {
        const { data: referidoData, error: referidoError } = await supabase
          .from("referidos")
          .insert({ referido: referidoId })
          .select();
      }

      if (error) throw error;

      setSuccess(true);
      setFormData({
        nombre_comprador: "",
        email_comprador: "",
        celular_comprador: "",
        cc: "",
        referido: "",
      });
      setReferidoId(null);
      console.log("Comprador creado correctamente", data);
    } catch (error) {
      console.error("Error al crear comprador:", error);
      setError(error.message);
    }
  };

  return (
    <div className="h-[600px] flex items-center justify-center w-full">
      <div className="bg-base-300 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">
          Formulario de Comprador
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Comprador registrado exitosamente
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nombre_comprador"
              className="block text-sm font-medium text-gray-200"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre_comprador"
              name="nombre_comprador"
              value={formData.nombre_comprador}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email_comprador"
              className="block text-sm font-medium text-gray-200"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email_comprador"
              name="email_comprador"
              value={formData.email_comprador}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
              placeholder="correo@ejemplo.com"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="celular_comprador"
              className="block text-sm font-medium text-gray-200"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="celular_comprador"
              name="celular_comprador"
              value={formData.celular_comprador}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
              placeholder="Número de teléfono"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="cc"
              className="block text-sm font-medium text-gray-200"
            >
              Cédula
            </label>
            <input
              type="text"
              id="cc"
              name="cc"
              value={formData.cc}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
              placeholder="Ingresa tu cédula"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="referido"
              className="block text-sm font-medium text-gray-200"
            >
              Referido
            </label>
            <input
              type="text"
              id="referido"
              name="referido"
              value={formData.referido}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 text-gray-100"
              placeholder="Código de referido"
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Pagar
            </button>
            <button className="w-full  text-white border border-red-700 py-2 px-4 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComprador;
